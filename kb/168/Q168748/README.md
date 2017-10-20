---
layout: page
title: "Q168748: Java Applets Cause IE 3.02 to Stop Responding w/ SP3"
permalink: /kb/168/Q168748/
---

## Q168748: Java Applets Cause IE 3.02 to Stop Responding w/ SP3

{% raw %}

	Article: Q168748
	Product(s): Microsoft Windows NT
	Version(s): 3.02,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer version 3.02 for Windows NT 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet Explorer version 3.02 may hang when connecting to a Web link that
	contains a Java application after you have installed Windows NT version 4.0
	Service Pack 3. The application will stop responding only if the Display
	Properties Color Palette is set to True Color.
	
	CAUSE
	=====
	
	In Windows NT version 4.0 Service Pack 3 the GetDIBits API does not fill the bit
	fields when a BI_RGB (uncompressed) DIB is returned on a True Color (32 bpp)
	display. This GDI change was made because the bit fields are not required in
	this case. As a side effect, this change may cause a regression in applications
	that expect a valid RGB mask on a True Color display.
	
	The Java virtual machine included with Internet Explorer 3.02 calls GetDIBits
	when initializing the display palette. The Java virtual machine expects a valid,
	signed RGB mask value larger than 0x80h and, if a value less than 0x80h is
	received, it doubles the mask value in a tight loop until it is larger than
	0x80h. Because Service Pack 3 GetDIBits do not fill the bit fields when a BI_RGB
	is returned, applications that evaluate the RGB mask receive an unlikely result
	that can be negative (for example, 0xffffffe0h.) When the Java virtual machine
	evaluates the RGB mask and receives a negative value, it loops forever and
	causes Internet Explorer to stop responding.
	
	It is important to note that the Java virtual machine should be treating the RGB
	Mask as an unsigned integer. There are some conditions where an ATI video card
	returns a valid RGB Mask value of 0xff000000h causing the Java virtual machine
	to loop forever because it is not treating the mask as an unsigned integer. A
	separate fix for the Java virtual machine issue with ATI video cards in True
	Color will be available in Internet Explorer 4.0. The Java code is licensed from
	Sun Microsystems, Inc.
	
	RESOLUTION
	==========
	
	To work around this problem, do not use the True Color palette in Display
	Properties.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Win32k.sys was modified to return a valid RGB color mask on True Color display
	systems.
	
	Java-fix has been superseded by Getadmin-fix. For your convenience, the English
	version of this post-SP3 hotfix has been posted to the following Internet
	location. However, Microsoft recommends that you install Windows NT 4.0 Service
	Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/getadmin-fix
	
	You can find the original hotfix at the following Microsoft ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/archive/java-fix
	
	WARNING: If you install the original (archived) version of this hotfix AFTER you
	apply the later version, your system may become unusable. Microsoft does not
	recommend you install the original hotfix after applying the later version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00 ie 3.02 prodnt
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE302WinNT400
	Version           : :3.02,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
