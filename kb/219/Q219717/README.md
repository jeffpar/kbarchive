---
layout: page
title: "Q219717: NTOP Has Not Been Tested with the Current Configuration"
permalink: /kb/219/Q219717/
---

## Q219717: NTOP Has Not Been Tested with the Current Configuration

{% raw %}

	Article: Q219717
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of the Windows NT Option Pack on a computer running
	Windows NT Server 4.0 with Service Pack (SP) 4 installed, a notification box is
	displayed indicating that the Windows NT Option Pack has not been tested with
	the current configuration.
	
	During the unattended installations of the Windows NT Option Pack, this
	notification causes the installation to stop. The INF file for the unattended
	installation of the Windows NT Option Pack does not contain any parameters for
	acknowledging this pop-up notification, which causes the unattended installation
	to fail.
	
	CAUSE
	=====
	
	When the Windows NT Option Pack installs, the Setup program checks the OS to
	confirm that SP3 is installed. If SP3 is not installed, the installation stops.
	If the version check results in versions later than SP3, such as SP4, the pop-up
	warning occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Note that the Windows NT 4.0 Option Pack is unsupported on Windows NT 4.0,
	Terminal Server Edition. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 5.
	
	MORE INFORMATION
	================
	
	Copy the content from the Windows NT Option Pack compact disc to a network share
	location, and then, replace the Iis.dll and Preload.exe files from the Windows
	NT Option Pack compact disc with the Iis.dll and Preload.exe files from the
	hotfix zip file.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	
	
	Additional query words: corrupt font
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
