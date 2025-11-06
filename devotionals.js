// Google Sheets Integration
// Replace with your published Google Sheets URL
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQq6Q3bB7JN7K8X8V9Y0ZzA7bL6M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J/pub?output=csv';

// Expanded sample data with more devotionals
const samplePosts = [
    {
        id: 1,
        title: "Walking in God's Purpose",
        excerpt: "Discover how to align your life with God's divine plan and experience the fulfillment that comes from walking in purpose.",
        content: `
            <div class="scripture">
                "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
            </div>
            <p>In a world filled with uncertainty and constant change, it's comforting to know that God has a specific plan for each of our lives. His plans are not random or accidental but are carefully designed with our ultimate good in mind.</p>
            <p>Many times we struggle with understanding our purpose or direction in life. We question our decisions and wonder if we're on the right path. During these moments of doubt, we must remember that God's thoughts toward us are thoughts of peace and not of evil.</p>
            <p>Walking in God's purpose requires faith and trust. It means surrendering our own limited understanding and embracing His infinite wisdom. When we align our will with God's will, we position ourselves to experience the abundant life He has promised.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Heavenly Father, thank You for having a perfect plan for my life. Help me to trust in Your timing and purpose, even when I don't understand the path ahead. Give me the wisdom to discern Your will and the courage to follow where You lead. May my life bring glory to Your name as I walk in the purpose You have designed for me. In Jesus' name, Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>Take a moment to reflect on areas of your life where you might be resisting God's plan. Are there dreams you're holding onto too tightly? Are there paths you're afraid to walk down? Surrender these to God and ask for the faith to follow His leading.</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Spend 10 minutes in quiet prayer, asking God to reveal His purpose for your life</li>
                    <li>Write down one step of faith you can take this week to align more closely with God's will</li>
                    <li>Share an encouraging word with someone who is struggling to find their purpose</li>
                    <li>Memorize Jeremiah 29:11 and recall it whenever you feel uncertain about your direction</li>
                </ul>
            </div>
        `,
        category: "purpose",
        date: "October 17, 2023",
        author: "Kachi Emmanuel"
    },
    {
        id: 2,
        title: "The Power of Faith in Difficult Times",
        excerpt: "Learn how to strengthen your faith when facing challenges and discover the transformative power of trusting God.",
        content: `
            <div class="scripture">
                "Now faith is confidence in what we hope for and assurance about what we do not see." - Hebrews 11:1
            </div>
            <p>Faith is not the absence of challenges but the presence of trust in the midst of them. When we face difficult circumstances, our faith is both tested and strengthened.</p>
            <p>True faith acknowledges the reality of our struggles while simultaneously affirming the greater reality of God's sovereignty. It's in our weakest moments that God's strength is made perfect.</p>
            <p>Developing a resilient faith requires daily practice. It means choosing to trust God even when we don't understand His ways. It means holding onto His promises when our circumstances seem to contradict them.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Lord Jesus, strengthen my faith in times of difficulty. Help me to fix my eyes not on what is seen, but on what is unseen. When doubts arise, remind me of Your faithfulness throughout history and in my own life. Build in me a faith that can move mountains and withstand any storm. In Your mighty name, Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>Consider a current challenge you're facing. How can you exercise faith in this situation? What promises of God can you cling to when fear or doubt tries to take hold?</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Identify one area where you need to exercise greater faith and take a specific step of trust</li>
                    <li>Write down three Bible verses about God's faithfulness and read them daily this week</li>
                    <li>Share a testimony of God's faithfulness with someone who is struggling</li>
                    <li>Spend time in worship, focusing on God's character rather than your circumstances</li>
                </ul>
            </div>
        `,
        category: "faith",
        date: "October 15, 2023",
        author: "Kachi Emmanuel"
    },
    {
        id: 3,
        title: "Finding Peace in a Chaotic World",
        excerpt: "Explore practical ways to access God's peace that surpasses all understanding in the midst of life's storms.",
        content: `
            <div class="scripture">
                "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." - Philippians 4:7
            </div>
            <p>In our fast-paced, constantly connected world, peace can feel like an elusive concept. Yet Jesus promised His followers a peace that the world cannot give.</p>
            <p>God's peace is not dependent on external circumstances but on our internal connection to Him. It's a peace that guards our hearts and minds, even when everything around us is in turmoil.</p>
            <p>Cultivating this peace requires intentional practices like prayer, meditation on Scripture, and moments of silence before God. It means learning to cast our anxieties on Him because He cares for us.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Prince of Peace, I come to You with my anxious thoughts and worried heart. Fill me with Your supernatural peace that surpasses all understanding. Teach me to rest in Your presence and trust in Your sovereign control over every aspect of my life. May Your peace rule in my heart today. Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>What areas of your life are causing you anxiety or stress? How can you practically surrender these to God and receive His peace in return?</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Practice the "breath prayer" technique: breathe in while silently saying "You are my peace," breathe out while saying "I receive Your peace"</li>
                    <li>Create a peaceful space in your home for quiet reflection and prayer</li>
                    <li>Limit exposure to news and social media that increases anxiety</li>
                    <li>Memorize and meditate on Philippians 4:6-7 throughout the day</li>
                </ul>
            </div>
        `,
        category: "prayer",
        date: "October 12, 2023",
        author: "Kachi Emmanuel"
    },
    {
        id: 4,
        title: "Growing in Spiritual Maturity",
        excerpt: "Discover the pathway to spiritual growth and how to develop Christlike character in your daily life.",
        content: `
            <div class="scripture">
                "Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation." - 1 Peter 2:2
            </div>
            <p>Spiritual growth is not automatic; it requires intentional pursuit. Just as physical growth requires proper nutrition and exercise, spiritual maturity develops through consistent spiritual practices.</p>
            <p>Growing in Christ involves both receiving from God (through His Word, prayer, and worship) and responding to God (through obedience, service, and witness). It's a lifelong journey of becoming more like Jesus in our thoughts, attitudes, and actions.</p>
            <p>Spiritual maturity is evidenced by increased love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. These fruits of the Spirit develop as we abide in Christ and allow His life to flow through us.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Heavenly Father, I desire to grow in spiritual maturity and Christlike character. Help me to crave Your Word and prioritize time in Your presence. Transform me from the inside out, that I may bear much fruit for Your kingdom. Give me a hunger and thirst for righteousness that only You can satisfy. In Jesus' name, Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>Where are you in your spiritual growth journey? What areas of your character need the most development? How can you create space in your life for the spiritual practices that foster growth?</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Establish a consistent daily time for Bible reading and prayer</li>
                    <li>Identify one character trait you want to develop and find relevant Scripture passages to meditate on</li>
                    <li>Find an accountability partner to encourage you in your spiritual growth</li>
                    <li>Serve in your local church or community to practice Christlike love</li>
                </ul>
            </div>
        `,
        category: "growth",
        date: "October 10, 2023",
        author: "Kachi Emmanuel"
    },
    {
        id: 5,
        title: "Building God-Honoring Relationships",
        excerpt: "Learn biblical principles for cultivating healthy, Christ-centered relationships in every area of your life.",
        content: `
            <div class="scripture">
                "Be completely humble and gentle; be patient, bearing with one another in love." - Ephesians 4:2
            </div>
            <p>Relationships are at the heart of God's design for humanity. From our connection with Him to our interactions with others, relationships reflect the relational nature of our Triune God.</p>
            <p>Building God-honoring relationships requires humility, forgiveness, and selfless love. It means putting others' needs before our own and extending grace as we have received grace from Christ.</p>
            <p>Healthy relationships are characterized by open communication, mutual respect, and shared spiritual growth. They provide a context for us to practice the "one another" commands found throughout the New Testament.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Lord Jesus, You are the perfect example of selfless love and servant leadership. Teach me to love others as You have loved me. Help me to build relationships that honor You and reflect Your character. Give me wisdom in my interactions and humility to admit when I'm wrong. May my relationships be a testimony of Your transforming grace. Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>Which of your relationships need attention or healing? How can you apply biblical principles to improve these relationships? What steps can you take to become a more Christlike friend, family member, or colleague?</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Reach out to someone you haven't connected with in a while</li>
                    <li>Practice active listening in your conversations today</li>
                    <li>Forgive someone who has hurt you, releasing them to God</li>
                    <li>Express appreciation to the important people in your life</li>
                </ul>
            </div>
        `,
        category: "relationships",
        date: "October 8, 2023",
        author: "Kachi Emmanuel"
    },
    {
        id: 6,
        title: "The Discipline of Prayer",
        excerpt: "Deepen your prayer life and discover the transformative power of consistent communication with God.",
        content: `
            <div class="scripture">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." - Philippians 4:6
            </div>
            <p>Prayer is both a privilege and a discipline. As God's children, we have direct access to the throne of grace, yet developing a consistent prayer life requires intentional effort.</p>
            <p>Prayer is more than presenting our requests to God; it's about cultivating intimacy with our Heavenly Father. It involves listening as much as speaking, resting in God's presence as much as asking for His intervention.</p>
            <p>A vibrant prayer life transforms our perspective, aligns our will with God's, and releases His power into our circumstances. It's the primary means through which we partner with God in His work on earth.</p>
            <div class="prayer">
                <h3>Prayer</h3>
                <p>Heavenly Father, thank You for the incredible privilege of prayer. Teach me to pray according to Your will and to listen for Your voice. Help me to develop a consistent prayer life that honors You and transforms me. May my prayers be filled with faith, hope, and love, reflecting the heart of Jesus. Amen.</p>
            </div>
            <div class="reflection">
                <h3>Reflection</h3>
                <p>How would you describe your current prayer life? What obstacles prevent you from praying more consistently? What changes can you make to prioritize prayer in your daily routine?</p>
            </div>
            <div class="action-points">
                <h3>Action Points</h3>
                <ul>
                    <li>Set aside a specific time and place for daily prayer</li>
                    <li>Use the ACTS model (Adoration, Confession, Thanksgiving, Supplication) to structure your prayers</li>
                    <li>Keep a prayer journal to record requests and God's answers</li>
                    <li>Find a prayer partner to pray with regularly</li>
                </ul>
            </div>
        `,
        category: "prayer",
        date: "October 5, 2023",
        author: "Kachi Emmanuel"
    }
];

// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');
    const blogModal = document.getElementById('blog-modal');
    const closeModal = document.getElementById('close-modal');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let allPosts = [];
    let filteredPosts = [];
    
    // Load blog posts from Google Sheets or use sample data
    loadBlogPosts();
    
    // Close modal when close button is clicked
    closeModal.addEventListener('click', function() {
        blogModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the content
    blogModal.addEventListener('click', function(e) {
        if (e.target === blogModal) {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            const filter = this.getAttribute('data-filter');
            filterPosts(filter);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'var(--black)';
                nav.style.padding = '1rem';
                nav.style.gap = '1rem';
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our devotional blog!');
        newsletterForm.reset();
    });
    
    // Add donate button click event
    const donateBtn = document.querySelector('.donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', function(e) {
            // Optional: Add any analytics tracking here
            console.log('Support Us button clicked');
        });
    }
    
    // Function to load blog posts
    function loadBlogPosts() {
        // Try to fetch from Google Sheets first
        fetch(SHEET_URL)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(csvText => {
                const posts = parseCSV(csvText);
                allPosts = posts;
                filteredPosts = [...posts];
                displayBlogPosts(posts);
            })
            .catch(error => {
                console.error('Error fetching from Google Sheets:', error);
                // Use sample data if Google Sheets is not accessible
                allPosts = samplePosts;
                filteredPosts = [...samplePosts];
                displayBlogPosts(samplePosts);
            });
    }
    
    // Function to parse CSV data
    function parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        const posts = [];
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length === headers.length) {
                const post = {};
                for (let j = 0; j < headers.length; j++) {
                    post[headers[j].trim()] = values[j].trim();
                }
                posts.push(post);
            }
        }
        
        return posts;
    }
    
    // Function to filter posts
    function filterPosts(filter) {
        if (filter === 'all') {
            filteredPosts = [...allPosts];
        } else {
            filteredPosts = allPosts.filter(post => post.category === filter);
        }
        displayBlogPosts(filteredPosts);
    }
    
    // Function to display blog posts
    function displayBlogPosts(posts) {
        blogContainer.innerHTML = '';
        
        if (posts.length === 0) {
            blogContainer.innerHTML = '<div class="loading">No devotionals found in this category.</div>';
            return;
        }
        
        posts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <div class="blog-info">
                    <span class="blog-category">${post.category || 'Teaching'}</span>
                    <h3 class="blog-title">${post.title}</h3>
                    <div class="blog-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-author"><i class="fas fa-user"></i> ${post.author || 'Kachi Emmanuel'}</span>
                    </div>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <button class="read-more" data-id="${post.id}">Read More</button>
                </div>
            `;
            
            blogContainer.appendChild(blogCard);
        });
        
        // Add event listeners to Read More buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function() {
                const postId = this.getAttribute('data-id');
                const post = allPosts.find(p => p.id == postId);
                if (post) {
                    openBlogModal(post);
                }
            });
        });
    }
    
    // Function to open blog modal with full content
    function openBlogModal(post) {
        document.getElementById('modal-category').textContent = post.category || 'Teaching';
        document.getElementById('modal-title').textContent = post.title;
        document.getElementById('modal-date').textContent = post.date;
        document.getElementById('modal-author').textContent = post.author || 'Kachi Emmanuel';
        document.getElementById('modal-text').innerHTML = post.content;
        
        blogModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

// Devotional Notification
document.addEventListener('DOMContentLoaded', function() {
    // Check if notification was already closed today
    const lastClosed = localStorage.getItem('devotionalNotificationClosed');
    const today = new Date().toDateString();
    
    // Only show if not closed today
    if (lastClosed !== today) {
        const notification = document.querySelector('.devotional-notification');
        if (notification) {
            // Show after 3 seconds
            setTimeout(() => {
                notification.classList.add('show');
            }, 3000);
            
            // Close button
            const closeBtn = notification.querySelector('.close-notification');
            closeBtn.addEventListener('click', function() {
                notification.classList.remove('show');
                localStorage.setItem('devotionalNotificationClosed', today);
            });
            
            // Auto-hide after 15 seconds
            setTimeout(() => {
                if (notification.classList.contains('show')) {
                    notification.classList.remove('show');
                    localStorage.setItem('devotionalNotificationClosed', today);
                }
            }, 15000);
        }
    }
});