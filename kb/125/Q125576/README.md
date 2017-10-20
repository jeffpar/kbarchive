---
layout: page
title: "Q125576: PRB: Scrolling Message &quot;Record not available ... Please Wait&quot;"
permalink: /kb/125/Q125576/
---

## Q125576: PRB: Scrolling Message &quot;Record not available ... Please Wait&quot;

{% raw %}

	Article: Q125576
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A FoxPro application running in a multiuser environment occasionally displays a
	message box containing this scrolling message:
	
	  Record not available ... Please Wait
	
	This message may scroll for a few minutes or for as long as an hour or more.
	
	CAUSE
	=====
	
	FoxPro is receiving a busy signal when requesting a process from the server.
	There are two possible causes for the busy signal:
	
	- Novell's Transaction Tracking Services (TTS) is active.
	
	  -or-
	
	- There is a contention problem on the network server due to:
	
	   - Several users actively adding or updating records to a database where the
	     CDX contains a large number of Tags or several very complex Tags.
	
	     -or-
	
	   - A large number of users are actively adding or updating records in a less
	     than optimal network environment.
	
	     -or-
	
	   - Various combinations of the above.
	
	
	The scrolling message results from FoxPro requesting a process from the network
	server and receiving a busy signal. This is not an error message, but rather an
	informational message from FoxPro. It is in essence saying "I have completed
	your transactions and handed off the update to the file server, but the file
	server is still working on completing some other updates to this file. Would you
	please wait?"
	
	RESOLUTION
	==========
	
	A workstation that gets this message will eventually be able to complete the
	pending process, although this could take a considerable amount of time.
	
	If TTS is running, try turning it off. FoxPro does not provide direct support for
	Novell TTS. However, Novell provides a library (Nwtts.dll) that works with the
	FoxPro Library Construction Kit (LCK) to accomplish transactional processing.
	
	Support for transactions has been implemented in Visual FoxPro. For more
	information, search for 'Transactions' in the Visual FoxPro Online Help.
	
	
	
	If TTS is not running, the problem is most likely a contention problem on the
	server. This means that the server is receiving more requests for processing
	transactions than it can deal with so they're backing up in the server's process
	queue. Eventually the server will catch up, the queue will be emptied out, and
	things will be back to normal.
	
	Avoiding This Network Storm
	---------------------------
	
	It's important to note that because there is no error condition, there is no
	error to trap. Once this message appears, the network is already experiencing a
	network storm and the only resolution is to have all users stop what they're
	doing and wait for it to clear. The preferred approach is to take steps to avoid
	the storm in the first place.
	
	Two known approaches involve upgrading to a more powerful network or moderating
	the flow of process requests to the network server. While upgrading the network
	may be prohibitive, it is often relatively easy to moderate the flow of process
	requests to the server.
	
	Moderating the Flow of Process Requests
	---------------------------------------
	
	Here are two approaches you can use to moderate the flow of process requests to
	the network server:
	
	- Change over to a client/server database system such as SQL Server.
	
	  This concentrates more of the processing directly on the server and not over
	  the network thereby reducing the amount of transaction processing handled by
	  the network server.
	
	- Change your record locking/adding scheme to a more efficient one, and/or
	  introduce a small delay in the routines to allow the network server time to
	  catch up after each process.
	
	  NOTE: Minimizing the number and complexity of index tags may help this
	  situation. However, this problem has been reproduced on a network with only
	  four workstations and with as few as four tags in the index.
	
	Coding Techniques Effective in Dealing with This Problem
	--------------------------------------------------------
	
	Two coding techniques that have proven effective in dealing with this problem
	are: changing from record locking to file locking and introducing a wait state
	(delay) after adding to or changing any tables.
	
	Changing to file locking means that you use FLOCK() rather than RLOCK() when to
	add or change a record. It's important that you keep each lock only long enough
	to make the addition or change, and then release it.
	
	Although going to a file locking scheme may seem to be less efficient, it has the
	added benefit of spreading out process requests and leaves your program code in
	complete control. Because you are requesting a lock on the file before you
	process any records, you can provide more appropriate options when locks are
	unavailable due to heavy traffic.
	
	In effect, you are shifting processing control from the server to your program.
	You can add a delay by including a WAIT "" TIMEOUT n command immediately after
	releasing the file lock. To help spread out process requests to the server, you
	can vary the amount of time to wait (specified by n) depending on the time it
	takes to obtain the lock. One algorithm to accomplish this calls for requesting
	the lock within a loop and counting the iterations until the lock is obtained.
	Then use this count in a formula to arrive at a delay time. The longer it takes
	to obtain a lock, the longer the wait state. When you consider this taking place
	on several (or many) workstations, the net effect is to flatten out the flow of
	process requests to the server. This eliminates the peak conditions that result
	in the network storm.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: novel
	
	======================================================================
	Keywords          : kbnetwork kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6a,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
