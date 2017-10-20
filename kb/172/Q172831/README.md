---
layout: page
title: "Q172831: TimeServ Uses 100% of System Resources"
permalink: /kb/172/Q172831/
---

## Q172831: TimeServ Uses 100% of System Resources

{% raw %}

	Article: Q172831
	Product(s): Microsoft Press
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Between 5 and 6 P.M. eastern time on August 13, 1997, the TimeServ service may
	have begun consuming 100 percent of your system's resources.
	
	CAUSE
	=====
	
	This problem appears to be caused by a change in the United States Naval
	Observatory's time server. At this time, the problem does not appear to be
	caused by an error in the TimeServ utility, or by a malicious attack.
	
	WORKAROUND
	==========
	
	
	Change the TimeServ.ini file to use a Simple Network Time Protocol Server instead
	of a TCP/IP Server by using the following steps.
	
	NOTE: These steps will not work correctly if you are behind a firewall that
	passes TCP but not UDP (datagrams).
	
	1. Using the Services applet in the Control Panel, stop the TimeServ service.
	
	2. Open the \%SystemRoot%\TimeServ.ini using a simple text editor such as
	  Notepad.
	
	3. Click Search, and then click Find. Search for the following line:
	
	  " TYPE=INTERNET" (without the quotation marks)
	
	4. Insert a semicolon (;) in front of the line TYPE=INTERNET if there is no
	  semicolon present.
	
	5. Click Search, and then click Find. Search for the following line:
	
	  " TYPE=NTP" (without the quotation marks)
	
	6. If there is a semicolon in front of the line TYPE=NTP, delete it.
	
	7. Click Search, and then click Find. Search for the following line:
	
	  " NTPServer= " (without the quotation marks)
	
	8. Change the line to read as follows:
	
	  " NTPServer=tick.usno.navy.mil " (without the quotation marks)
	
	  NOTE: You may also substitute another NTP server, such as tock.usno.navy.mil.
	
	9. Save your changes and close Notepad.
	
	10. Click Start, point to Programs, and then click Command Prompt.
	
	11. Type "timeserv -update" (without the quotation marks), press ENTER, and then
	  close the Command Prompt window.
	
	12. Restart the TimeServ service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Additional information about this problem and other known issues with the
	Timeserv utility can be found at the following Web address:
	
	  http://home1.gte.net/dougho/TimeServ.html
	
	Please note that this site is not under the control of Microsoft and may change
	without notice. For Microsoft's official statement regarding other servers,
	please see the following World Wide Web site:
	
	  http://www.microsoft.com/misc/nonms.htm
	
	Additional query words: mspress press ms_press ntreskit ntrk 1-57231- 344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8 1-55615-657-X
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3 kbZNotKeyword5
	Version           : :3.51
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
