---
layout: page
title: "Q158864: How to Obtain Systems Management Server 1.2 Service Pack 4"
permalink: /kb/158/Q158864/
---

## Q158864: How to Obtain Systems Management Server 1.2 Service Pack 4

{% raw %}

	Article: Q158864
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP4
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF kbgraphxlinkcritical
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	*** THIS SERVICE PACK IS FOR SYSTEMS MANAGEMENT SERVER 1.2 ONLY!! ***
	
	Systems Management Server 1.2 Service Pack 4 is a cumulative build of all fixes
	to Systems Management Server version 1.2.
	
	To find out which bugs are fixed by this update, see the Readme.1st file that
	accompanies the service pack, or query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	AVAILABLE FORMATS FOR SYSTEMS MANAGEMENT SERVER 1.2 SERVICE PACK 4
	------------------------------------------------------------------
	
	Service Pack 4 is available as a single self-extracting archive file for Intel
	and ALPHA-based computers.
	
	FILES AVAILABLE FROM ONLINE SERVICES
	------------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Sms12sp4.exe now
	
	  DownloadDownload Sym12sp4.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	INSTALLING SYSTEMS MANAGEMENT SERVER 1.2 SERVICE PACK 4
	-------------------------------------------------------
	
	To install Systems Management Server 1.2 Service Pack 4, follow the steps below:
	
	1. Create a new directory called SMS12SP4 (example directory) on a local
	  workstation or your Primary Site Server.
	
	2. Download SMS12SP4.EXE and copy it into the directory created in step 1.
	
	3. From a Command Prompt, type the following command:
	
	  C:\SMS12sp4> SMS12SP4.exe
	
	4. You will be prompted to unzip to a folder. By default c:\temp is displayed.
	
	5. Change the path and directory to that location specified in step 1 and choose
	  unzip.
	
	6. Message will be displayed that unzip was successful.
	
	NOTE: The Service Pack 4 Setup program can not run from the same drive where SMS
	has been installed. Steps 7-9 will work around this problem by sharing the
	SMS12SP4 directory to a network drive and running Setup from the new drive.
	
	7. Share the \SMS12SP4 directory. For example, to create a share called SMSUPGRD
	  for C:\SMSUPGRD, use the following command:
	
	  C:\> net share SMS12SP4=C:\SMS12SP4
	
	8. Connect a network drive connection to the SMS12SP4 share. For example, to
	  connect S: to share SMS12SP4: C:\> net use S: \\ServerName\SMS12SP4
	
	9. Run Setup.CMD from the network drive connection. For example:
	
	  C:\> S:
	  S:\> setup.cmd
	
	Additional query words: prodsms servpack sp1 sp2 sp3 sp4 bug fix Smsdistrib
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF kbgraphxlinkcritical 
	Technology        : kbSMSSearch kbSMS120SP4
	Version           : :1.2 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
