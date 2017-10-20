---
layout: page
title: "Q197846: Printing Multiple Copies of the Same Job Via LPD Broken in SP4"
permalink: /kb/197/Q197846/
---

## Q197846: Printing Multiple Copies of the Same Job Via LPD Broken in SP4

{% raw %}

	Article: Q197846
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you submit a print job from a UNIX system to a Windows NT LPD server, you
	can specify an option to print multiple copies. When using Windows NT Service
	Pack 4 (SP4), only one copy is printed.
	
	WORKAROUND
	==========
	
	To work around this problem, the control characters "K" or "#" should be used to
	specify printing multiple copies.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 supports two non-RFC 1179 extensions for the LPD control file. If
	the format control character ("f") is sent multiple times, the file is printed
	multiple times. Also the "K" or "#" control characters can be used to specify
	printing multiple copies.
	
	  Example: (bsd-style printing)
	  lpr -Pprinter -#2 <file>
	
	In Windows NT 4.0 Service Pack 4, only one copy is printed even when there are
	multiple "f" commands in the control file.
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
