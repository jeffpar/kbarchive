---
layout: page
title: "Q148188: Internet Information Server Security .CMD /.BAT Patch"
permalink: /kb/148/Q148188/
---

## Q148188: Internet Information Server Security .CMD /.BAT Patch

{% raw %}

	Article: Q148188
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	On Sunday, February 25, 1996, Microsoft was alerted to a newsgroup posting
	regarding a Internet Information Server (IIS) security exposure. This ".CMD
	/.BAT Bug" allows a complicated string of commands sent from a web browser to an
	IIS server to be executed on that server.
	
	Malicious internet users can use this capability to tamper with an IIS
	installation (it is highly unlikely that accidental modification to your IIS
	installation can happen as a result of this bug).
	
	This problem is not unique to IIS -- similar problems exist with other Windows NT
	Web servers. As a result, the Microsoft Developer Relations group is in the
	process of notifying these vendors about the problem and providing guidance so
	that they can address it where appropriate.
	
	RESOLUTION
	==========
	
	Microsoft has developed a fix which provides a permanent solution to this
	problem. This fix is available now for you to download. It is important to note
	that you should always follow the safety guidelines outlined in the IIS
	Installation Guide regarding the securing of IIS against intruders, in order to
	minimize exposure to security problems. Regardless of whether or not you have
	followed these instructions, we recommend you download and install the .CMD
	/.BAT Patch on all IIS installations.
	
	All versions of IIS downloaded from our online distribution sites after March 5,
	1996 contains this fix.
	
	This patch is available for each of the Windows NT platforms in the following
	locations:
	
	  Microsoft's WWW server at the following URL:
	  http://www.microsoft.com/infoserv/iisenhance.htm
	
	  Microsoft's FTP server at the following URL:
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/IIS/fixes/cmdbat/
	
	To install the patch, download the executable for your platform. The executable
	automatically installs the fix when executed by an administrator on the IIS
	system.
	
	To verify the installation of the .CMD /.BAT IIS patch, the system administrator
	should check the file properties on the file W3SVC.DLL (found in the server
	sub-directory of your IIS installation tree). The version ID for this file
	should be 1.0a (Security Update).
	
	WORKAROUND
	==========
	
	Microsoft strongly recommends installing this IIS .CMD /.BAT patch, however, if
	you are unable to download and install this patch in a timely manner, you can
	implement the following workaround until you are able to install the patch.
	
	This workaround disables the ability to map either MS-DOS Batch files or Windows
	NT CMD files to the Windows NT Command Interpreter. If you have any CMD or BAT
	files active as scripts on your IIS installation, this workaround will disable
	them.
	
	You should take note of the registry keys that are deleted in case you decide to
	re-enable them at a later date, after the IIS patch has been installed.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To disable MS-DOS batch and CMD scripts from your server:
	
	1. From the Windows NT File Manager File Menu, choose RUN
	
	2. In the RUN dialog box, type REGEDT32, and choose OK
	
	3. From the Window menu in Registry Editor (started in the previous step),
	  select the "HKEY_LOCAL_MACHINE on Local Machine" window
	
	4. The following steps will take you to the Script Mapping key for the Web
	  Server:
	
	  a. Double click on SYSTEM
	
	  b. Double click on CurrentControlSet
	
	  c. Double click on Services
	
	  d. Double click on W3SVC
	
	  e. Double click on Parameters
	
	  f. Select the Script Map key
	
	5. Select the entry in the Registry Editor right hand pane that starts with
	  ".BAT"
	
	6. From the Edit menu choose Delete
	
	7. Choose YES to confirm the deletion
	
	8. Select the entry in the Registry Editors right hand pane that starts with
	  ".CMD"
	
	9. From the Edit menu choose Delete
	
	10. Choose YES to confirm the deletion
	
	11. Exit the Registry Editor
	
	12. Stop and Restart the Internet Information Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
