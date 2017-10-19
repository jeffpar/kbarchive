---
layout: page
title: "Q155745: Cannot Read Media.ini"
permalink: /kb/155/Q155745/
---

## Q155745: Cannot Read Media.ini

	Article: Q155745
	Product(s): The Microsoft Network
	Version(s): 1.3,2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install and then remove some third-party ISP software (such as Planet
	Internet or Compuserve 4.0), you may receive one of the following error messages
	when you attempt to connect to MSN, The Microsoft Network, or another Internet
	service provider using Dial-Up Networking:
	
	  Cannot read Media.ini
	
	  Error 667
	
	CAUSE
	=====
	
	Removing the third-party software may delete a registry key that is necessary to
	connect to MSN.
	
	Note: Uninstalling Compuserve 4.0.1 may also cause this issue to occur. However,
	no known resolution exists at this time for users who get this issue after
	uninstalling Compuserve 4.0.1.
	
	
	RESOLUTION
	==========
	
	Note: Before trying the steps listed below, we recommend that you upgrade to the
	latest version of MSN. Go to http://free.msn.com/upgrade to download or order a
	free CD. Upgrading to the latest version of MSN may solve this problem.
	
	Note: This issue can also appear if Connection Settings are set to use a dial-up
	connection, but the modem information is left blank. In this case, resolved the
	issue by simply selecting the MSN connection, and then connect again.
	
	To replace the necessary registry key, remove and reinstall Dial-Up Networking
	using these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Communications, and then click Details.
	
	4. Click the Dial-Up Networking check box to clear it.NOTE: If Direct Cable
	  Connection is installed, you receive a warning that it will also be removed.
	  Click Yes.
	
	5. Click OK until you return to Windows.
	
	6. Restart the computer.If you are using The Microsoft Network version 2.0 or
	  earlier then skip to step 18.
	
	7. Click Start, point to Find and then click Files Or Folders.
	
	8. In the Named box, type "icwscrpt.exe" (without the quotation marks), and
	  click Find Now.
	
	9. In the list of found files, double click "icwscrpt.exe" If more than one file
	  called 'Icwscrpt' is found then doubleclick on the file with the uppercase
	  'I'. If any dialogue boxes or prompts appear onscreen relating to 'Version
	  Conflicts' then answer Yes/click 'OK'.
	
	10. Close the Find: Files named icwscrpt.exe window.
	
	11. Double click on the white MSN icon on your Windows Desktop. The following
	  message will appear Connection Manager requires some Components that are not
	  installed on your computer. Do you want Connection Manager to install these?
	  Click Yes. You may be asked for your Windows 95 CD-Rom or floppy disks. If
	  you are prompted to restart the computer click Yes.
	
	12. Insert your MSN CD-ROM (version 2.5, 2.51, 2.6) into the CD-ROM
	  drive.(Windows 98 users insert Windows 98 or 2.6 CD-ROM) Press and hold the
	  Shift Key to prevent the CD-ROM from starting automatically.
	
	13. Click Start point to Find and click Find Or Folders.
	
	14. In the Named box, type "msnsvc.exe" (without the quotation marks)
	
	15. In the Look In box select the CD-ROM drive, and click Find Now.
	
	16. In the list of found files, double click on "msnsvc.exe", follow the
	  instructions on the screen.
	
	17. Close the windows to return to windows, now skip to step 23.
	
	18. Click Start, point to Settings, and then click Control Panel.
	
	19. Double-click Add/Remove Programs.
	
	20. On the Windows Setup tab, click Communications, and then click Details.
	
	21. Click the Dial-Up Networking check box to select it.
	
	22. Click OK until you return to Windows.
	
	23. Restart the computer.
	
	If this fails to resolve the issue follow these steps, use the Registry Editor to
	locate the Path value setting. WARNING: If you use Registry Editor incorrectly,
	you may cause serious problems that may require you to reinstall your operating
	system. Microsoft cannot guarantee that you can solve problems that result from
	using Registry Editor incorrectly. Use Registry Editor at your own risk.
	Use Registry Editor to locate the Path value setting in the following registry
	key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\remoteaccess\authentication\smm_files\ppp 
	
	Change the Path value setting to Rasapi32.dll.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: msn win95x dun
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :1.3,2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
