---
layout: page
title: "Q288540: XADM: No Traditional Spanish Templates in Exchange Server 5.5"
permalink: /kb/288/Q288540/
---

## Q288540: XADM: No Traditional Spanish Templates in Exchange Server 5.5

	Article: Q288540
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Spanish-language version of Microsoft Exchange Client or Microsoft Outlook
	may be unable to download the offline Address Book from an English-language
	Exchange Server 5.5 computer. This problem may occur even if the
	Spanish-language templates have been installed by using the Spanish-language
	Templates.csv file from the Exchange Server 5.5 CD-ROM.
	
	CAUSE
	=====
	
	This problem can occur if the traditional Spanish-language templates are not
	installed on the Exchange Server computer. These templates are listed as Espanol
	in the Details Templates container in the Exchange Server Administrator program.
	You may see a template called Espanol/moderno, which is the modern
	Spanish-language template. For most Spanish-language clients to work properly
	with an English-language Exchange Server computer, both the traditional
	Spanish-language and modern Spanish-language templates must be installed on the
	server.
	
	The traditional Spanish-language templates are not included in the
	Spanish-language Templates.csv file that is included with Exchange Server 5.5.
	
	RESOLUTION
	==========
	
	To resolve this problem, import the Templates.csv file that is included on
	either the Spanish-language Exchange Client version 5.0 CD-ROM or the
	Spanish-language Microsoft Outlook 98 CD-ROM, which includes both the Espanol
	and Espanol/moderno templates.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ol97 ol98 ol20 97 2000 OAB
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
