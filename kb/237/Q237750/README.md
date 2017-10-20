---
layout: page
title: "Q237750: SMS: Windows 2000 Beta 3 Upgrade Scripts Are Incorrect"
permalink: /kb/237/Q237750/
---

## Q237750: SMS: Windows 2000 Beta 3 Upgrade Scripts Are Incorrect

{% raw %}

	Article: Q237750
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbreadme kbsms200
	Last Modified: 22-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server (SMS) 2.0 Service Pack 1 (SP1) Readme.htm file
	states:
	
	  Note: When upgrading computers from Windows 95, Windows 98, Windows NT 3.51
	  and Windows NT 4.0 to Windows 2000 Beta 3, use the wrapper (W2kwrap.sms and
	  W2kwrap.exe) in the \Support directory on the SMS 2.0 SP1 compact disc.
	
	This information is incorrect. The correct wrapper scripts to use are:
	
	  Nt5svr.sms
	  Nt5wks.sms
	  W2kwrap.exe
	
	These files are located in the following folder:
	
	  SMS 2.0 Supportability Files\Reskit\Bin\I386\Deploy\W2KWrap
	
	The SMS 2.0 Supportability Files folder is created when Support.exe (located in
	the Support folder on the SMS 2.0 SP1 CD-ROM (or source folder), is run.
	
	MORE INFORMATION
	================
	
	There are two sets of Nt5srv.sms and Nt5wks.sms files. One set is in the Scripts
	folder on the site server (under the SMS folder). The other set is in the
	Support.exe file, which is in the Support folder on the SP1 CD-ROM or the
	installation source. The set in Support.exe has a workaround wrapper added so it
	can be used to upgrade to Microsoft Windows 2000 Beta 3.
	
	The following table lists the file attributes of the correct files.
	
	+----------------------------------------+
	| Date     | Time   | Size  | Name       | 
	+----------------------------------------+
	| 06/28/99 | 05:07p | 1,907 | Nt5svr.sms | 
	+----------------------------------------+
	| 06/28/99 | 05:07p | 2,083 | Nt5wks.sms | 
	+----------------------------------------+
	
	The files in the SMS\Scripts folder do not have the modification that allows SMS
	to monitor the progress of the Windows 2000 Beta 3 installation successfully.
	Therefore, when the installation process reboots, SMS may return an
	"advertisement failed" value even though the upgrade process may have been
	successful.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbreadme kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
