---
layout: page
title: "Q131727: XADM: EDBUTIL /d &lt;Path to Dir.edb&gt; Causes NT 2140 Error"
permalink: /kb/131/Q131727/
---

## Q131727: XADM: EDBUTIL /d &lt;Path to Dir.edb&gt; Causes NT 2140 Error

{% raw %}

	Article: Q131727
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Edbutil /d <path to Dir.edb> is run from the Exchsrvr\Bin directory,
	the following errors will occur:
	
	- In some cases, such as RC2 to RTM upgrade, a dialogue box will appear before
	  Edbutil finishes saying that Chkdsk needs to be run and that the
	  Exchsrvr\Dsadata directory is damaged and corrupt. After this dialogue is
	  cleared, Edbutil will finish successfully.
	
	- When the Microsoft Exchange Directory Service is restarted from Control Panel
	  Services, the following error message will be displayed:
	
	  Could not start the Microsoft Exchange Directory Service on server
	  \\<server name>. Error 2140: An Internal Windows NT error occurred.
	
	WORKAROUND
	==========
	
	Edbutil will create an Edb.chk, Edb.log, Res1.log and Res2.log in the directory
	in which it is run. When the Directory Service starts up, it is looking for
	these newly created files and cannot find them in it's working directory
	(Exchsrvr\Dsadata). There are two workarounds for this problem:
	
	- Run Edbutil in the Dsadata directory as follows:
	
	  C:\Exchsrvr\Dsadata>C:\Exchsrvr\Bin\Edbutil /d
	  C:\Exchsrvr\Dsadata\Dir.edb
	
	  Where C: should be replaced with the appropriate installation drive letter.
	  This will cause the .log files and Edb.chk file to be created in the
	  Exchsrvr\Dsadata directory.
	
	- Move the Edb.chk, Edb.log, Res1.log, and Res2.log files from the directory
	  where Edbutil was run, into the Exchsrvr\Dsadata directory.
	
	After performing either of the above steps, restart the Directory Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange Server. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
