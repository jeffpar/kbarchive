---
layout: page
title: "Q305313: Optimizing Internet Information Services 5.0"
permalink: /kb/305/Q305313/
---

## Q305313: Optimizing Internet Information Services 5.0

{% raw %}

	Article: Q305313
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbGraphxLink
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information covered in this article is provided by: Microsoft Press
	(http://mspress.microsoft.com/).
	
	This article explains how to optimize Microsoft Internet Information Services
	5.0. This information is based on a feature article that is a compilation of
	information from the Internet Information Services Resource Guide book in the
	Microsoft Windows 2000 Server Resource Kit, Chapter 4: "Capacity Planning" and
	Chapter 5: "Monitoring and Tuning Your Server." Learn More About Windows 2000
	Server Resource Kit.
	
	MORE INFORMATION
	================
	
	How do you get the best performance from your Web site? If you're managing Web
	sites and applications running on Microsoft Windows 2000 Server and Internet
	Information Services 5.0, you've got the basic ingredients for a high-powered
	site that can handle thousands of concurrent transactions. But just because the
	platform is great, you don't necessarily get high performance. If any of the
	following problems are yours-your users are telling you their connections to
	your site are slow, your machines hang indefinitely in the middle of serving
	page requests, or you find yourself looking at vendor estimates for servers with
	more processing power and memory-you need to know first what factors affect the
	performance of your site and how to optimize IIS 5.0 for maximum throughput.
	
	In this article, we'll see how IIS 5.0 uses system resources and how we can tune
	it for better performance. You'll find more information about this topic in the
	Microsoft Press book, Microsoft Internet Information Services 5.0 Resource
	Guide, which is one volume in the Microsoft Windows 2000 Server Resource Kit.
	This volume shows you in detail how to make the adjustments you need to make
	your Web site the best performer it can be. But we'll give you enough here to
	get started.
	
	Sources of Poor Web Site Performance
	------------------------------------
	
	What makes a Web site slow? You'll get a lot of answers to that question, but
	they all boil down to just a few probable causes:
	
	- The configuration of the hardware on which your Web site is running
	- The configuration of your Web server software
	- The bandwidth of your Internet connection
	- The design and configuration of your Web applications
	- The characteristics of your users' computers and their connections
	
	The bad news here is that if you're the Web administrator, not all of these
	factors are under your control. The bandwidth of your Internet connection is
	probably determined by budget. You probably have little influence over the
	design of your Web applications, even if they're built in-house. And, of course,
	you can't control your users. That being said, there's still a lot you can do.
	Let's start with your server itself.
	
	Optimizing Your Server
	----------------------
	
	Optimizing the performance of your Web server basically requires that you figure
	out the optimal configuration of memory, processor, hard disk, and network I/O.
	Although you might think that in all cases, more is always better, the truth is
	more complex than that.
	
	Memory:
	
	Want to optimize your server? Just add more memory! Isn't that what everyone
	says? If you've got a performance problem, just adding more RAM should fix it,
	right? If that were the case, I could end this article now. The truth is that,
	up to a point, adding memory does help; in fact, many cases of what seem to be
	processor or disk bottlenecks are actually memory problems. But beyond that
	point, adding memory does you no good at all. Still, optimizing your memory is
	the first and often easiest way to increase your IIS performance.
	
	It's important to remember that IIS runs on Windows 2000 Server and inherits its
	memory management. That means that quite a bit of memory optimization goes on
	automatically. Windows 2000 Server adjusts the amount of memory available to
	processes and threads; it also adjusts the size of caches, paged and nonpaged
	memory pools, and the size of paging files to provide for optimum performance.
	When you optimize your memory for IIS, you're not so much trying to select the
	amount of memory to assign each process, thread, or cache as determining whether
	Windows 2000 has enough memory at its disposal to do all the automatic adjusting
	of which it's capable.
	
	How do you find out whether your server has enough memory? Let's start by
	considering what an IIS 5.0 Web server uses its memory for. Windows 2000 Server
	controls memory by allocating to each process a corresponding chunk of memory
	known as its working set. In nearly all cases, individual threads within a
	process use pieces of memory allocated from within that working set. As a
	process grows, Windows 2000 adds more memory to its working set to account for
	its needs. Most of the memory allocated is pageable, which means the data in
	that memory can be stored temporarily on disk and recalled to RAM when it's
	needed. However, some threads, such as TCP/IP connections, require nonpageable
	memory; the memory must be live RAM, not a file on disk. As the number of
	connections increases and as other demands on nonpageable memory accrue, the
	system can run out of free memory and can't allocate any more. This situation
	can cause a system crash; in fact, it's how some denial-of-service attacks
	work.
	
	IIS 5.0, like anything else running on a Windows 2000 Server, is a process:
	inetinfo.exe. Therefore, it has a working set. The working set that belongs to
	IIS includes space for the program code itself, active TCP/IP connections, the
	IIS Object Cache, the IIS log files, and HTTP connection data structures. The
	program code can occupy up to 2.5 MB of RAM, and the other elements of the
	working set vary in size according to how many users are simultaneously
	connected (about 10 KB for each TCP/IP connection, plus more for the HTTP data)
	and how many Web sites are being hosted on the server (minimum 64-KB
	memory-mapped log file per site). In addition to the working set of inetinfo.exe
	itself, IIS uses the IIS Template Cache, the IIS Script Engine Cache, and the
	IIS File System Cache, three caches that by default are outside inetinfo.exe,
	but can be configured to run within it. IIS also uses the TCP Transmission
	Control Block hash table and a pool of threads for executing code. These
	elements, which are external to inetinfo.exe, must live in nonpaged memory; you
	absolutely need enough RAM to accommodate them.
	
	You can use the available counters in Performance Monitor to track the memory
	used by the system as well as by inetinfo.exe itself. Chapter 5 of The IIS 5.0
	Resource Guide, "Monitoring and Tuning Your Server," includes an extensive list
	of counters. Some of the most essential are the following:
	
	- Computername\Memory\Available Bytes - This counter tracks the total amount of
	  available memory in the system. The operating system tries to keep this value
	  above 4 MB. A better metric for optimum performance is 5 percent of the total
	  RAM.
	- Computername\Process\Working Set: Inetinfo - This counter tracks the amount
	  of memory used by inetinfo.exe itself. You get only the most recent value,
	  but by observing it over time, you can get a picture of the memory used by
	  IIS.
	- Computername\Process\Page Faults/sec.: Inetinfo - This counter tracks the
	  number of times the server has to page pieces of inetinfo.exe to disk per
	  second. You want this number as small as possible.
	
	Overall, what you're looking for is a picture of how much memory the whole server
	uses and how much memory IIS itself uses. At a minimum, you want at least enough
	memory so that all of inetinfo.exe can be kept in RAM and not paged to disk,
	plus enough RAM to run the caches and other nonpageable items outside the
	working set. Beyond that, you need to anticipate the memory requirements of the
	Web applications you're running. (For instance, most of Microsoft's Web servers
	have at least 512 MB of RAM to account for their Web applications.) Finally, you
	should plan on having enough RAM in the system to store in memory all the static
	pages on your Web site to make retrieval and serving of those pages much faster.
	By monitoring your computer's memory use over time and under load, you'll be
	able to tell how much RAM your system should have.
	
	Processor:
	
	After you get your memory optimized, you'll probably find that things work
	considerably faster. But you can do more: the processor is another potential
	bottleneck. The reason you work on optimizing memory first, though, is precisely
	so that you won't mistake memory problems for processor problems. For instance,
	if your server hasn't enough memory, it could spend lots of time paging threads
	to disk; that paging time adds to the processor load and can make it appear that
	an overloaded processor is the root of your difficulties.
	
	Here again, Performance Monitor can tell you what you need to know. While there
	are several counters worth monitoring (again, see Chapter 5 of The Resource
	Guide), the most critical one is System\ Processor Queue Length. This counter
	tells you how many threads are waiting for the processor to become available. If
	this counter runs higher than 2 for extended lengths of time, your processor
	might be bottlenecked.
	
	With multiprocessor servers, which are increasingly the norm, you've got another
	dimension to consider: processor load balancing. A system in which one processor
	is 100 percent booked while other processors sit idle is still bottlenecked,
	even though the System\% Processor Time counter reads lower, because that
	counter records the average value for all processors in the system by default.
	To get a good picture, you must run System\% Processor Time for each individual
	processor.
	
	If your testing determines that you have a processor problem, your first option,
	of course, is to upgrade your processor or switch to a multiprocessor machine.
	If you do upgrade your processor, make sure it has the maximum L2 cache; IIS
	benefits from this because many of its instruction paths involve multiple
	components, which will run much faster in cache memory. The IIS 5.0 Resource
	Guide gives you several more pointers for optimizing your processor.
	
	Hard Disk :
	
	You can do a number of things to your server's hard disk configuration to make
	disk use more efficient. Because the hard disk is the repository for paged
	memory, the way the server handles paging files becomes an important
	consideration. Let's go over this and other pointers:
	
	- Enlarge your paging files. Ideally, you should have a primary paging file
	  that's at least twice the size of your system's RAM, plus 1 MB. Your computer
	  needs this space to perform a memory core dump in case of a crash.
	- Increase the number of paging files. By default, there's one paging file, but
	  you can and should set up a paging file on every hard disk attached to the
	  system.
	- Use disk striping to improve page file performance. If you place your primary
	  paging file on a striped disk set (RAID 0) or a striped set with parity (RAID
	  5), you'll find that paging file performance radically increases.
	- Store your log files to a disk other than the one your Web pages are on. This
	  keeps the disk logging thread from interfering with threads retrieving Web
	  pages.
	- Optimize your Web page storage. All the related Web pages on your site should
	  be stored together on the same logical partition; this arrangement improves
	  the performance of the File System Cache. Also, keep your Web page files
	  defragmented; this radically improves the speed of reading a single file.
	
	Server Configuration Options
	----------------------------
	
	Beyond the hardware optimizations, the configuration of the server software can
	have a dramatic impact on performance. Here, the name of the game is "stripped
	down for speed." You'll get good guidance on this topic from the Microsoft
	Windows 2000 Server and IIS 5.0 Administrator's Pocket Consultant, a very good
	quick reference from Microsoft Press. Is your Web server dedicated to IIS and
	nothing else? If not, that's something to fix. If you're trying to use your Web
	server for other network services, don't. Put those services on another machine
	and dedicate your IIS server to nothing but the Web. Once you do, here's a bunch
	of services you can most likely quit running on that machine:
	
	- Alerter
	- ClipBook
	- Computer Browser
	- DHCP Client
	- DHCP Server
	- Fax Service
	- File Replication
	- INfrared Monitor
	- Internet Connection Sharing
	- Messenger
	- NetMeeting Remote Desktop Sharing
	- Network DDE
	- Network DDE DSDM
	- NWLink NetBIOS
	- NWLink IPX/SPX
	- Print Spooler
	- TCP/IP NetBIOS Helper Service
	- Telephony
	- Telnet
	- Uninterruptible Power Supply
	
	Before you stop any of these services, of course, you should double-check that it
	truly isn't needed.
	
	You can make other optimizations to your server's configuration as well. For
	instance, IIS 5.0 uses up to 50 percent of your server's memory by default. This
	default setting allows you to accommodate any other applications you might need
	to run on the server. If you're dedicating the server to IIS and stripping out
	unnecessary services, however, you can certainly increase this percentage by
	creating and setting the MemCacheSize entry in the Windows Registry. Another
	setting you can adjust is the Server Optimization properties under File and
	Printer Sharing: set this to "Maximize throughput for network applications" and
	the server will preferentially keep inetinfo.exe in RAM rather than paging it
	out to disk when the File System Cache needs more space. Yet another setting
	that you can adjust is the maximum connection queue length for HTTP keep-alives;
	by exceeding the default setting of 15, you can extend the number of clients who
	can maintain open HTTP connections on your server between sessions, thus helping
	to reduce the number of new connections that must be generated. Both the
	Resource Guide and the Administrator's Pocket Consultant include more system
	settings you can adjust to optimize your configuration.
	
	NOTE: If the IIS server is a member of a domain, the TCP/IP NetBIOS Helper
	service is required to properly apply group policy to the computer.
	
	Optimizing Network Bandwidth
	----------------------------
	
	I won't say too much about optimizing network I/O because the reality is that
	most organizations buy all the bandwidth they can afford; everyone understands
	that the more bandwidth you've got, the more clients your Web site can serve.
	Most of the time, bandwidth is a sizable ongoing expense that becomes a budget
	issue beyond your control. You should know, however, that The Resource Guide
	includes substantial information about how to use Performance Monitor to keep
	track of your Web site's network bandwidth usage. Analyzing how well your server
	is using its available bandwidth can tell you whether you need to purchase
	more.
	
	Optimizing Web Applications and Web Pages
	-----------------------------------------
	
	Once you've maxed out your hardware, tweaked your software, and bought all the
	bandwidth you can afford, what more can you do? A lot depends on how much
	influence you have over the design of your Web site. If you control how your Web
	site is built, you can implement the following recommendations yourself;
	otherwise, consider them suggestions to bring to your Web site developers and
	management team.
	
	The first thing to do is analyze your Web site content and make as much of it
	static HTML as is practical. Although you do want to maintain dynamic
	interactions with your user, you'll often find that many pages are needlessly
	built from scripts when storing a few static variations would serve your users'
	different needs. Static HTML is more quickly and easily served than any other
	content because it requires no server processing.
	
	Server processing being at a premium, the next thing to do is to reduce the
	amount of time your server spends processing scripts and data to generate
	dynamic pages. By this measure, the most voracious consumer of server processing
	is CGI; CGI scripts take up more processing resources than ASP, and ASP takes up
	more processing than ISAPI. As much as possible, therefore, convert your CGI
	scripts to ASP, and anywhere you can convert your ASP to ISAPI, do it.
	
	Here are some further tips:
	
	- Turn off application debugging! Debugging slows your Web site a lot.
	- Set Expire headers on all your static Web pages and images. This setting
	  allows clients and proxy servers to cache the content, meaning fewer fresh
	  requests to your server.
	- Enable ISAPI application caching. This strategy places frequently used ISAPI
	  applications in memory where they're more quickly accessed.
	- Enable caching of ASP output if you can.
	- Turn off session management, and turn it on only for those services that
	  actually use sessions. By default, session management is on for everything;
	  if your applications don't use it, you're wasting resources. Also, set a
	  proper session time-out value.
	- Set appropriate script and connection time-outs to make sure zombie scripts
	  and open connections don't drain your server's resources.
	- Reduce the size of your content. Make sure your HTML and ASP code is clean
	  and simple, not overly cluttered with excess comments and redundant tags.
	  Compress video, audio, and image files. The smaller a page, the more quickly
	  it can be delivered.
	- Design your ASP or ISAPI applications to do as much client-side processing as
	  possible, which helps minimize the draw on server resources.
	- Design your client interactivity to use as few data reads and writes between
	  client and server as possible. For instance, one large query for a whole
	  record set is better than multiple small queries for a few records or fields
	  at a time; similarly, data entered by the user should be transmitted all in
	  one push, if possible, rather than having each data item sent to the server
	  separately.
	
	Microsoft Press Solutions
	-------------------------
	
	Whew! You can see that you have a lot of work to do to fully optimize the
	performance of your IIS 5.0 Web server. Fortunately, you've got a lot of help
	from Microsoft Press at your disposal. Press books will help you understand the
	parameters of system performance and how to make your server's performance the
	best it can be. Check out these titles:
	
	- Microsoft Internet Information Services 5.0 Resource Guide, one volume of the
	  Microsoft Windows 2000 Resource Kit (see below) tells you all you need to
	  know about how to monitor and tune your system's performance. Check out
	  Chapter 5, "Monitoring and Tuning Your Server," and Chapter 4, "Capacity
	  Planning."
	- Microsoft Windows 2000 and IIS 5.0 Administrator's Pocket Consultant is a
	  great quick reference for system administrators. Go to the Pocket Consultant
	  for quick guidance for performing system management tasks. See Chapter 12,
	  "IIS Optimization and the Metabase," for tips on Web server performance
	  tuning.
	- Microsoft Internet Information Services 5.0 Documentation Set provides the
	  essential documentation for configuring and managing Web sites and developing
	  applications for IIS.
	- Microsoft Windows 2000 Performance Tuning Technical Reference provides
	  complete information about performance tuning for Windows 2000. Check out
	  Chapter 14, especially, for information about tuning Windows 2000 Server for
	  the Internet.
	
	Finally, no system administrator dealing with IIS 5.0 and Windows 2000 should be
	without essential references and tutorials for Windows 2000:
	
	- Microsoft Windows 2000 Server Administrator's Companion describes in detail
	  how to install, configure, administer, and support Windows 2000 Server,
	  including Virtual Private Networking (VPN). (Check out Chapter 31.)
	- MCSE Training Kit: Microsoft Windows 2000 Server is the official study guide
	  from Microsoft Press for preparing for the Windows 2000 Server exam (70-215).
	  This book shows you how to set up and support Windows 2000 Server. For
	  coverage of VPN, see Chapter 10, "Routing and Remote Access Service."
	- Microsoft Windows 2000 Server Resource Kit contains Microsoft's complete
	  reference for Windows 2000 Server. This seven-volume set consists of the
	  following guides:
	
	   - Server Operations Guide
	   - Distributed Systems Guide
	   - TCP/IP Core Networking Guide
	   - Internetworking Guide
	   - Deployment Planning Guide
	   - Internet Information Services 5.0 Resource Guide
	   - Internet Explorer 5 Resource Kit
	
	For a complete list of Windows 2000 learning and training titles from Microsoft
	Press, visit the Windows 2000 section. For material that covers .NET Enterprise
	Servers, see the .NET section.
	
	REFERENCES
	==========
	
	The information in this article is an excerpt from the Windows 2000 Server
	Resource Kit book, published by Microsoft Press.
	
	Picture of Windows 2000 Server Resource Kit book
	
	Learn More About Windows 2000 Server Resource Kit
	
	For more information about this publication and other Microsoft Press titles, see
	http://mspress.microsoft.com.
	
	
	
	Additional query words: kbmspressexcerpt
	
	======================================================================
	Keywords          : kbGraphxLink 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
