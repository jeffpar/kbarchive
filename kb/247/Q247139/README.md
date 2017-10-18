---
layout: page
title: "Q247139: AppGetStatus Is Different than MMC Status Using Adsutil.vbs"
permalink: kb/247/Q247139/
---

## Q247139: AppGetStatus Is Different than MMC Status Using Adsutil.vbs

	Article: Q247139
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to get the status of an application by using the Adsutil.vbs
	utility, the command fails to show the correct status of the application. There
	is an inconsistency between what the metabase displays and what the Internet
	Information Server (IIS) Microsoft Management Console (MMC) displays. In the
	MMC, the Application settings are not disabled (grayed out), because the MMC
	believes the application is loaded.
	
	CAUSE
	=====
	
	A confirmed bug in IIS 4.0 is the cause of this behavior. At this time, there is
	no fix for IIS 4.0.
	
	RESOLUTION
	==========
	
	This problem has been corrected in Internet Information Services (IIS) 5.0. To
	resolve this problem, upgrade to IIS 5.0, which is included in Windows 2000
	Professional, Windows 2000 Server, and Windows 2000 Advanced Server.
	
	WORKAROUND
	==========
	
	There are two possible workarounds to use in an IIS 4.0 environment. To perform
	the workarounds, you need to obtain the Mdutil.exe utility, which can be found
	on the Windows NT Option Pack CD in the following location:
	
	  CDROM:\Ntoptpak\En\x86\Winnt.srv\Mdutil.exe
	
	Workaround 1:
	
	NOTE: The following information assumes that you have copied the Mdutil.exe file
	to your local c: drive.
	
	1. At a command prompt, type the following command:
	
	  "C:\>mdutil.exe appgetstatus w3svc/1/root/iisadmin" (without the quotation
	  marks)
	
	  The screen displays the following:
	
	  Application is running
	
	2. Type the following command:
	
	  "C:\>mdutil.exe appunload w3svc/1/root/iisadmin" (without the quotation
	  marks)
	
	  The screen displays the following:
	
	  Application unloaded
	
	  Open the browser and go to the virtual directory or Web site where you want to
	  make changes.
	
	3. Type the following command:
	
	  "C:\>mdutil.exe appgetstatus w3svc/1/root/iisadmin" (without the quotation
	  marks)
	
	  The screen displays the following:
	
	  Application is running
	
	4. Type the following command:
	
	  "C:\>mdutil.exe appunload w3svc/1/root/iisadmin" (without the quotation
	  marks)
	
	  The screen displays the following:
	
	  Application unloaded
	
	5. Type the following command:
	
	  "C:\>mdutil.exe appgetstatus w3svc/1/root/iisadmin" (without the quotation
	  marks)
	
	  The screen displays the following:
	
	  Application is stopped
	
	Workaround 2:
	
	The second alternative is to use the adsutil delete function. To issue this
	command, perform the following steps:
	
	1. Type the following command at a command prompt:
	
	  "C:\WINNT\system32\inetsrv\adminsamples>adsutil appdelete
	  w3svc/1/root/iisadmin" (without the quotation marks)
	
	  The display shows Application Deleted.
	
	2. Type the following command:
	
	  "C:\WINNT\system32\inetsrv\adminsamples>adsutil appcreateinproc
	  w3svc/1/root/iisadmin" (without the quotation marks)
	
	  The display shows Application Created.
	
	NOTE: To change the application's friendly name, use the following command:
	
	  "C:\WINNT\system32\inetsrv\adminsamples>adsutil delete
	  w3svc/1/root/iisadmin/AppFriendlyName" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce this Behavior:
	
	1. Change to the c:\WINNT\System32\Inetsrv\Adminsamples directory and issue the
	  following command:
	
	  adsutil appunload w3svc/1/root/iisadmin
	
	2. The screen displays the following:
	
	  Application Unloaded
	
	3. Open the Internet Service Manager, navigate to the Default Web Site\IISAdmin
	  folder, right-click the folder, and then click Properties.
	
	4. Under the Virtual Directory Application Settings, the Unload button is
	  disabled (grayed out).
	
	When you attempt to access the site or reload a .asp page, the application does
	not read the Global.asa file. According to the design on an application, when
	the Global.asa file is unloaded, the next hit to a .asp page should produce a
	reload of the Global.asa file. Therefore, when you open the MMC, you should see
	the application status as "loaded," and be able to unload. However, because the
	Unload button is disabled in the MMC, you cannot do this.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
