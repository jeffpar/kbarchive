---
layout: page
title: "Q313889: XGEN:  Microsoft Does Not Recommend Installing Exchange Server 5"
permalink: kb/313/Q313889/
---

## Q313889: XGEN:  Microsoft Does Not Recommend Installing Exchange Server 5

	Article: Q313889
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft strongly recommends that you avoid installing Outlook 2000 or later
	and Exchange Server 5.5 on the same computer. Unless third party programs are
	designed and tested to run in this configuration, those programs may not work
	properly and may impair an Exchange Server. These types of Messaging Application
	Programming Interface (MAPI) programs that may be affected are custom MAPI store
	providers, custom gateway and transport providers, and extended MAPI clients.
	These behaviors occur because these two products ship versions that produce a
	conflict of the MAPI subsystem that may not be cleanly reconciled without
	breaking either Exchange Server 5.5 or Outlook.
	
	MORE INFORMATION
	================
	
	You may want to install Outlook and Exchange Server on the same computer to take
	advantage of certain Outlook components in server-side programs. For most
	program development needs, it is not necessary to install Outlook on an Exchange
	Server. Exchange 2000 Server and Exchange Server 5.5 include Collaboration Data
	Objects (CDO), which can provide similar functionality as the Outlook Object
	Model. However, CDO is designed for server-side use and you may not experience
	the behaviors that can occur by using later versions of Outlook. For additional
	information about the types of behaviors a customer may experience, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q290500 OL2002: Developer Information About E-Mail Security Features
	
	You may also want install Outlook and Exchange Server on the same computer to
	create MAPI profiles, however, it is not necessary to do so to create MAPI
	profiles. For additional information about how to create MAPI profiles without
	installing Outlook, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q306962 HOWTO: Create MAPI Profiles Without Installing Outlook
	
	You may want to install Outlook and Exchange Server on the same computer for
	demonstration purposes. The following configurations have been tested for
	demonstration purposes:
	
	- Exchange Server 5.5 used with Outlook 97
	
	- Exchange Server 5.5 used with Outlook 98
	
	- Exchange Server 5.5 used with Outlook 2000
	
	NOTE: Exchange Server 5.5 used with Outlook 2002 has not been tested.
	
	Symptoms and Explanations:
	
	Exchange Server installs MAPI subsystems in the Winnt\System32 folder. If the
	user starts Exchange Server by using Outlook 2000 and later, the MAPI subsystem
	moves to the Program Files\Common Files\System\Mapi\1033\NT folder. Typically,
	Outlook installs a "stub" version of MAPI in the Winnt\System32 folder, which
	routes MAPI calls the Outlook implementation. If Exchange Server is running
	Outlook is installed, the Mapi32.dll file is still loaded, and the file is not
	replaced by the stub DLL. This behavior is by design so that the Exchange Server
	computer is not impaired.
	
	This configuration can break the installation of custom MAPI providers. Each
	version of MAPI expects to find the Mapisvc.inf file in a different location.
	For example, the IMsgServiceAdmin::CreateMsgService method may stop responding
	with MAPI_E_NOT_FOUND if the expected Mapisvc.inf is not updated with the
	provider information. To workaround this behavior update both copies of the
	Mapisvc.inf file so that both versions of MAPI can distinguish the changes.
	
	Because the MAPI32 stub library is not in place, setting the stub library
	registry keys has no effect on the computer. All of the programs except Outlook
	can use the Exchange MAPI implementation. Outlook can load the Msmapi32.dll file
	from the Program files\Common files\System\Mapi\1033\NT folder.
	
	It is possible to install Exchange Server so that the Exchange MAPI providers are
	not installed. If this procedure is completed, Outlook is able to use the MAPI
	that it installs in the Program Files\Common Files\System\Mapi\1033\NT folder.
	However, other MAPI programs may not read files in Mapisvc.inf, and may not be
	able to load them even if Mapisvc.inf is updated to list them. Reinstalling the
	Exchange Administrator on the computer corrects this behavior.
	
	
	If you quit Exchange Server services before you install Outlook, or if you quit
	Exchange Server and run the Fixmapi.exe file to overwrite the \Winnt\System32
	files with the stub library, this procecudure may force Exchange Server to use
	the Outlook version of MAPI. However, Exchange Server does not support this
	configuration, and this procedure should not be done in a production
	environment. The recommended solution is to install these programs on separate
	computers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook2002 kbZNotKeyword2 kbOutlook2000Search kbOutlook2002Search kbZNotKeyword3 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
