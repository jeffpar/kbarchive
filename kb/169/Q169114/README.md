---
layout: page
title: "Q169114: XADM: Find Service Pack and Account of Shut Down Server"
permalink: /kb/169/Q169114/
---

## Q169114: XADM: Find Service Pack and Account of Shut Down Server

{% raw %}

	Article: Q169114
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are recovering a Microsoft Exchange Server computer, it is important to
	restore the database files to a new Exchange Server computer with the same
	organization name, site name, service account, service account password, service
	pack, and preferably the same server name. The administrator may not remember
	this information, and a lot of time is lost in the trying to get it.
	
	This article explains how to deduce the service pack level of the original
	Exchange Server computer, before it stopped responding. It also explains how to
	find the service account inside the information store (IS) if the directory (DS)
	is successfully started. This article does not, however, explain how to find the
	original organization name, site name, server name, and Windows NT domain name.
	For information about how to find these names, please contact Microsoft
	Technical Support.
	
	MORE INFORMATION
	================
	
	To Find the Service Pack Level:
	-------------------------------
	
	From the File Manager or the MS-DOS prompt, change to Exchsrvr\bin directory,
	find the size of the file Store.exe, and compare it to the following list (in
	bytes):
	
	SP Level      Build     Store.exe   Mailumx.dll   X400Om.dll
	  ------------------------------------------------------------
	  4.0 (RTM)      837.10   1,339,152   744,224       335,524
	  4.0 SP 1       838
	  4.0 SP 2       993.4    1,347,344   750,624       336,096
	  4.0 Post SP2   994.12   1,348,368   750,624       336,096
	  4.0 SP 3       994.64   1,347,856   751,152       336,096
	  4.0 Post SP3   995.33   1,347,856
	  4.0 SP 4       995.54
	  4.0 Post SP4   996.6    1,347,344
	  5.0 (RTM)      1457.11  2,328,848   893,200       318,736
	  5.5 (RTM)      1960.5   2,624,272   937,744       320,784
	
	
	To Find Service Account Inside the IS:
	--------------------------------------
	
	Start the Exchange Server Administrator program. It will find the Exchange Server
	if the System Attendant and the directory have started successfully.
	
	1. On the left side, select the Configuration container.
	
	2. On the right side, doubleclick the Information Store Site configuration.
	
	3. Click the Permissions tab (if this tab is not visible, click Options on the
	  Tools menu). Select the "Show Permissions page for all objects" check box.
	
	4. Read the Windows NT Domain and Windows NT Account name of the Service account
	  Admin.
	
	For additional information about how to find the original organization name, site
	name, server name, and Windows NT domain name, please contact Microsoft Product
	Support.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
