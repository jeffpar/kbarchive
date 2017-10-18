---
layout: page
title: "Q215105: SMS: 16-Bit Files Remain After Upgrading to 32-Bit Windows 95/98"
permalink: kb/215/Q215105/
---

## Q215105: SMS: 16-Bit Files Remain After Upgrading to 32-Bit Windows 95/98

	Article: Q215105
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a 16-bit Windows 3.x Systems Management Server (SMS) client to
	a 32-bit Microsoft operating system (such as Microsoft Windows 95, Microsoft
	Windows 98, or Microsoft Windows NT), two Advertised Programs icons are
	displayed in Control Panel. In addition, the <Windows>\Ms\Sms\Core\Bin
	folder contains 16-bit files.
	
	CAUSE
	=====
	
	This issue can occur if the SMS client installation process detects that the
	client is running a 32-bit operating system. Setup installs the 32-bit client
	components but does not remove the old 16-bit client components.
	
	WORKAROUND
	==========
	
	To work around this issue, manually remove the 16-bit files. To do this, follow
	these steps:
	
	1. On the Start menu, click Shut Down.
	
	2. Click "Restart in MS-DOS mode", and then click OK.
	
	3. Delete the following files:
	
	   - <Winbootfolder>\Ismif16.dll
	
	   - <Winbootfolder>\Smsrc16.ini
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Hinv\Hinv16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Hinv\Unhinv16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Rcclic16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Rcpoke16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Rcunin16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Idisp16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Loc16vc0.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Wchat16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Wslave16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Imp16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Woudat16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\Smsrc16.hlp
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\_wlsav16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\_wchat16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\_imp16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Rctrl16\_idisp16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\RemCtrl\Woudat16.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\RemCtrl\Loc16vc0.dll
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Sinv\Sinv16.exe
	
	   - <Winbootfolder>\Ms\Sms\Clicomp\Sinv\Unsinv16.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Boot16wn.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Clicor16.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Cliex16.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Discv16.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Smsclr16.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Launch16.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Ccim16.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16svc.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16sto.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Clstat16.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16ran.dir
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16ran.pag
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16off.dir
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16off.pag
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16sto.sto
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16wiz.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16agt.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Undist16.exe
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Smsmon16.hlp
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\Apm16res.dll
	
	   - <Winbootfolder>\Ms\Sms\Core\Bin\pcd16.dll
	
	   - <Winbootfolder>\MS\SMS\SYSTEM\SMSRC16.cpl
	
	   - <Winbootfolder>\System\Smsrc16.cpl
	
	4. Shut down and then restart the computer.
	
	To remove the 16-bit client files automatically, use an SMS Installer script or
	another scripting method. These scripts can be delivered through SMS itself or
	by using a logon script.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
