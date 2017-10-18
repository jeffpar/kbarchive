---
layout: page
title: "Q217040: XFOR: New Lotus cc:Mail Dirsync Mapping Rule"
permalink: kb/217/Q217040/
---

## Q217040: XFOR: New Lotus cc:Mail Dirsync Mapping Rule

	Article: Q217040
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	There are three directory synchronization (dirsync)-related mapping rules for
	the Microsoft Exchange Connector for Lotus cc:Mail. The first two are discussed
	in the following Microsoft Knowledge Base article:
	
	  Q197254 Customize Dirsynced cc:Mail Display and Alias Names
	
	This article describes the mapping rule for mapping information in the Comments
	field to Exchange attributes. Note that this applies to both DB6 and DB8 Post
	Offices.
	
	MORE INFORMATION
	================
	
	By taking advantage of the Comments field in Lotus cc:Mail, it is possible to
	automatically map user-specific information such as office location, telephone,
	department, and so on to an Exchange Server-equivalent field.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run the Registry Editor
	
	2. Find the following registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC\Parameters
	
	3. Add the following value:
	
	+-------------------------------------+
	| Value Name   | Dirsync Comment Rule | 
	+-------------------------------------+
	| Data Type    | String (REG_SZ)      | 
	+-------------------------------------+
	| String Value | desired string value | 
	+-------------------------------------+
	
	The following table lists the recognized parameters:
	
	+--------------------------------------+
	| Parameter       | Description        | 
	+--------------------------------------+
	| %a              | Alias name         | 
	+--------------------------------------+
	| %d              | Department         | 
	+--------------------------------------+
	| %o              | Office             | 
	+--------------------------------------+
	| %p              | Phone              | 
	+--------------------------------------+
	| %c              | Custom attribute 1 | 
	+--------------------------------------+
	| ;               | Comment delimiters | 
	+--------------------------------------+
	| Multiple spaces | Ignored            | 
	+--------------------------------------+
	
	For example, in cc:Mail, if you have the rule, %a;%o;%p, and the comment,
	jsmith;43/3019;(425) 936-1111, this will map to the Alias, Office, and Phone
	fields for that custom recipient. If cc:Mail custom recipients already exist on
	the Exchange Server computer, deleting the custom recipients and running dirsync
	afterwards may be required for the comments in cc:Mail to mapped over to the
	cc:Mail custom recipient on Exchange Server.
	
	In Exchange 5.5 SP3, you can only synchronize the contents of the cc:Mail
	Comments field into the Exchange Custom Recipient Notes field, which is located
	in the Custom Recipients properties under the Phone/Notes property page.
	Meaning, if you have multiple values in the cc:Mail Comments field, and you have
	configured the registry per the instructions in this article using mupltiple
	parameters, all the contents will be written to the Exchange Custom Recipient's
	Notes field. For example, if you were to have the following value in cc:Mail's
	Comments field
	
	  425-123-4567;Redmond;JDoe;Human Resources;Assistant
	
	and then you configured the registry value "Dirsync Comment Rule" as follows:
	
	  %p;%o;%a;%d;%c
	
	You would find that this configuration does not work as expected: The entire
	comment value would get written to the Exchange Notes field. The value you put
	in the registry has no effect; it can even be left blank, and the behavior is
	the same.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
