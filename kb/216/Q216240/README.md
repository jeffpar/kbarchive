---
layout: page
title: "Q216240: Cluster Log is Overwritten When Cluster Server Starts"
permalink: /kb/216/Q216240/
---

## Q216240: Cluster Log is Overwritten When Cluster Server Starts

{% raw %}

	Article: Q216240
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable cluster logging in Microsoft Cluster Server 1.0, the log file is
	overwitten every time the Cluster service starts.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  01/07/99  04:28p                15,632 Clusprxy.exe  (x86)
	  01/07/99  04:27p               502,032 Clussvc.exe   (x86)
	  01/07/99  04:28p                42,768 Resrcmon.exe  (x86)
	  01/07/99  04:28p                10,000 Rpcltccl.dll  (x86)
	  01/07/99  04:29p                11,536 Rpcltscl.dll  (x86)
	
	  01/07/99  04:27p                25,360 Clusprxy.exe  (Alpha)
	  01/07/99  04:26p               804,112 Clussvc.exe   (Alpha)
	  01/07/99  04:27p                65,808 Resrcmon.exe  (Alpha)
	  01/07/99  04:28p                18,192 Rpcltccl.dll  (Alpha)
	  01/07/99  04:28p                18,704 Rpcltscl.dll  (Alpha)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Server,
	Enterprise Edition.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q168801 How to Enable Cluster Logging in Microsoft Cluster Server
	
	Additional query words: 4.00 MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
