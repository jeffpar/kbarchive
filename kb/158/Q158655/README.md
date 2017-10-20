---
layout: page
title: "Q158655: Mac Encarta 97: May Run Slowly on PowerMacs with Low Memory"
permalink: /kb/158/Q158655/
---

## Q158655: Mac Encarta 97: May Run Slowly on PowerMacs with Low Memory

{% raw %}

	Article: Q158655
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Encarta 97 on a Power Macintosh equipped with only 8 MB of RAM, the
	program slows considerably after approximately 30 minutes of use.
	
	CAUSE
	=====
	
	This may occur because:
	
	- Encarta is not using the preferred amount of RAM (6144 KB) listed in the
	  Preferred Memory field of the Encarta 97 Encyclopedia Info box.
	
	  -or-
	
	- A large amount of the processing Encarta is performing is being done by using
	  virtual memory and the hard drive.
	
	RESOLUTION
	==========
	
	Increase the amount of Random Access Memory (RAM) installed on your computer.
	
	MORE INFORMATION
	================
	
	Because Encarta 97 is loaded with features, and because the System Software on a
	Macintosh running system 7.x generally consumes between 3 and 5 MB of RAM, the
	room left over for Encarta to use is not sufficient for optimal performance. In
	addition, programs written in native Power Macintosh code (such as Encarta 97)
	are generally larger than non-Power Macintosh because of the increased amount of
	instructions needed for RISC (Reduced Instruction Set Computer) processors.
	
	Because the amount of RAM left over for Encarta is small, Encarta is forced to do
	much of its processing using virtual memory.
	
	For more information on how virtual memory works on a Macintosh, please refer to
	the following article in the Microsoft Knowledge Base.
	
	  Q120506 How Virtual Memory Works on a Power Macintosh
	
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm ppc power mac macmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1997Mac
	Version           : :1997 edition
	
	=============================================================================
	

{% endraw %}
