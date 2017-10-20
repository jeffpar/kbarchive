---
layout: page
title: "Q76769: README.TXT: What If You Run Out of Memory?"
permalink: /kb/076/Q76769/
---

## Q76769: README.TXT: What If You Run Out of Memory?

{% raw %}

	Article: Q76769
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Windows with Multimedia Extensions
	version 1.0 README.TXT file. The Setup program copies this file to the Windows
	with Multimedia Extensions directory.
	
	This information does not apply to later versions of Windows.
	
	WHAT IF YOU RUN OUT OF MEMORY?
	==============================
	
	As you're running applications in Windows or are trying to start an
	application, you might receive messages about being out of memory. You
	can find out how much memory is available and of what type by choosing
	the About command from the Help menu in either Program Manager or File
	Manager. A dialog box containing memory information appears.
	
	The following list describes each memory category and suggests how to
	increase available memory:
	
	Amount of memory free   This number is the amount of conventional
	                       memory currently available for
	                       applications.
	
	                       When you run Windows in standard mode,
	                       this number includes extended memory.
	
	                       When you run Windows in 386 enhanced
	                       mode, this number includes virtual
	                       memory and could be much larger than the
	                       physical amount of memory in your
	                       computer.
	
	                       If you need more memory or if the amount
	                       of free memory is less than 30K, close
	                       some applications.
	
	Amount of EMS free      When you run Windows in real mode with
	                       an expanded memory driver installed,
	                       this number shows the amount of expanded
	                       memory currently available. It is
	                       possible to have plenty of expanded
	                       memory available, but be out of
	                       conventional memory.
	
	                       You can close some applications to free
	                       up conventional memory.
	
	                       You will be unable to use the Multimedia
	                       extensions when running Windows in real
	                       mode.
	
	SMARTDrive Amount       This number is the amount of expanded
	                       memory claimed by SMARTDrive. Windows
	                       3.0 can allocate memory from SMARTDrive
	                       as needed.
	
	                       For more information on how to use
	                       SMARTDrive, see Chapter 4, "Optimizing
	                       Your System," in Introducing Windows with
	                       Multimedia.
	
	System Resources        This number is the percentage of system
	                       resources available. This number never
	                       reaches 100% because the system itself
	                       takes up some system resources.
	
	                       If this number is too low (about 15%),
	                       you cannot run more applications
	                       regardless of how much free memory you
	                       have. Close some applications to free
	                       system resources.
	
	KBCategory: kbreadme kbmm
	KBSubcategory: win31
	
	Additional query words: MMWIN kbmm 1.00 readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
