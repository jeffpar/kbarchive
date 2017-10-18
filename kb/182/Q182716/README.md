---
layout: page
title: "Q182716: XCLN: Internet Options Tab Missing from Send Options Dialog Box"
permalink: kb/182/Q182716/
---

## Q182716: XCLN: Internet Options Tab Missing from Send Options Dialog Box

	Article: Q182716
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you go to Properties of a message in any of the Microsoft Exchange clients
	or Outlook clients and click Send Options, no Internet tab will appear on the
	dialog box. Without this tab, the type of encoding format for attachments is no
	longer configurable.
	
	CAUSE
	=====
	
	Due to a registry limitation, the maximum number of message types (for example,
	SMTP, MS, EX, X.400, and so on) that can be stored by any given client is
	hard-coded to 16. If you have more than 16 unique message types, some of them
	will not be downloaded to the client's registry. These message types are stored
	alphabetically, and this problem is only seen when 16 message types
	alphabetically come before SMTP. For example, if a Microsoft Exchange
	organization has 16 unique custom message types that begin with the letter "F",
	the SMTP option information will not be stored in the client's registry and the
	Internet tab will not be shown in the Send Options dialog box.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	However, in some cases, you may still experience the symptoms described above
	after applying the fix. Microsoft has confirmed this to be a problem in newer
	builds of the Microsoft Exchange Server version 5.5 information store. This
	problem has been corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,5.5,8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
