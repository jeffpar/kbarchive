---
layout: page
title: "Q202941: SMS: Systems Management Server International Client Packs"
permalink: kb/202/Q202941/
---

## Q202941: SMS: Systems Management Server International Client Packs

	Article: Q202941
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes International Client Packs (ICPs) for Systems Management
	Server (SMS).
	
	MORE INFORMATION
	================
	
	General Description
	-------------------
	
	An ICP is a bundle of SMS client installation files in various languages. ICPs
	are targeted for installation on English-language SMS site servers only. The
	languages supported in each ICP are cumulative. When you install an ICP, all of
	the languages contained in the ICP are installed; you cannot select a specific
	language. The ICP installation bundles are then distributed to the clients via
	the Client Access Points (CAPs) and the appropriate language files are installed
	on the client systems.
	
	ICPs Available by Product Version and Service Pack
	--------------------------------------------------
	
	- SMS 1.2: ICP1, ICP2
	
	- SMS 2.0: ICP1, ICP2, ICP3, ICP4, ICP5
	
	- SMS 2.0 Service Pack 1: ICP1, ICP4, ICP5
	
	- SMS 2.0 Service Pack 2: will have ICP1, ICP4, ICP5
	
	
	Separate ICPs for Each Service Pack
	-----------------------------------
	
	You must match service pack and ICP releases (for example, SMS 2.0 SP1 can use
	only SP1 ICPs, not SMS 2.0 ICPs).
	
	Languages Included in ICPs
	--------------------------
	
	See the Release Notes on the ICP CD-ROM for detailed information about supported
	languages. The ICPs and supported languages include:
	
	- ICP1:
	  English, French, German, Spanish, and Japanese
	  (Japanese was added to ICP1 for SMS 2.0 SP2)
	
	- ICP2:
	  ICP1 languages plus Dutch, Italian, and Swedish
	
	- ICP3:
	  ICP2 languages plus Brazilian, Danish, Finnish, Norwegian, and Portuguese
	
	- ICP4:
	  ICP3 languages plus Czech, Greek, Hungarian, Polish, Russian, Turkish, Korean,
	  Simplified Chinese, and Traditional Chinese
	
	- ICP5:
	  ICP4 languages plus Arabic and Hebrew
	
	ICP Languages Are Cumulative
	----------------------------
	
	The SMS ICPs are cumulative. Any client language that exists in a previous ICP
	also exists in all subsequent releases. For example, ICP5 includes all client
	languages that are included with ICP1 and ICP4, in addition to the languages
	introduced in ICP5 itself.
	
	Determining If an ICP Is Installed on the SMS Site
	--------------------------------------------------
	
	You can determine if an ICP is installed by checking for the language folders
	(for example, the 00000409 folder for English and the 00000407 folder for
	German) on the site server. There should be a folder for each client languages
	supported by that ICP. Check for the I386\<language_id>\smsman.exe)
	folders.
	
	Removing an Installed ICP
	-------------------------
	
	Currently, SMS does not support removing installed ICPs on the site. Microsoft
	recommends that you create a full backup of the site before installing an ICP.
	
	Installing an ICP on a Secondary Site
	-------------------------------------
	
	In SMS 2.0 and 2.0 SP1, you can install ICPs on secondary sites only by using the
	Upgrade Secondary Site Wizard.
	
	In SMS 2.0 SP2, you can install ICPs from the CD-ROM, remotely (by advertisement
	or by using Remote control), or by using Courier Sender.
	
	Multiple-Site Hierarchy and ICP Installation
	--------------------------------------------
	
	In a hierarchy that has two regional child primary sites running ICP4 (for
	example), both reporting to a central site server that runs the English-language
	version, the central site server does not need to be running SP4.
	
	Multiple-User Interface (MUI) Support on Windows 2000 SMS Clients
	-----------------------------------------------------------------
	
	For additional information about MUI support on Windows 2000-based SMS clients,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q259447 SMS: System Management Server 2.0 Service Pack 2 Includes Limited MUI
	  Support for Windows 2000 Clients
	
	Additional Information
	----------------------
	
	See the Microsoft BackOffice Resource Kit, Chapter 3, "Using SMS 2.0 in a
	Multilingual Environment" for more information about ICPs and SMS.
	
	Also, see the ICP Release Notes for each ICP for additional information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
