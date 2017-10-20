---
layout: page
title: "Q233476: XCLN: Outlook Msg Sent to Wrong Recipients/OAB Corruption"
permalink: /kb/233/Q233476/
---

## Q233476: XCLN: Outlook Msg Sent to Wrong Recipients/OAB Corruption

{% raw %}

	Article: Q233476
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kbOutlook98 kbOutlook98bug kbOutlook98fix kbOutlook850 kbOutlook850bug kbOutlook850fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you compose a message offline using the offline Address Book, the message
	may be sent to the wrong recipient. For example, User A sends an e-mail message
	to User B and in the Sent Items folder, the mail may be shown as having been
	sent to User C. When you check the properties for User C in the Sent Mail
	folder, they are those of User D.
	
	CAUSE
	=====
	
	When a name in a message is resolved from the Global Address List in an offline
	Address Book, that name coincides with an entry ID in the Global Address List.
	If address additions or modifications cause new X.500 address information or
	SMTP domains in the online Address Book, the client offline Address Book
	information may contain domain name offsets that do not match the server
	offsets. Thus, the display name is right but the resolution is wrong, resulting
	in a misrouted message.
	
	RESOLUTION
	==========
	
	A combination client/server fix for this issue exists and must be deployed to
	resolve this issue in the following manner:
	
	1. Install Microsoft Exchange Server 5.5 Service Pack 2 on all the Exchange
	  Server 5.5 computers. The service pack can be downloaded at:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/SP2/
	
	2. Quit Outlook.
	
	3. Apply the Archive Patch on each desktop computer. The patch can be downloaded
	  at:
	
	Outlook 98:
	
	  http://office.microsoft.com/downloads/9798/arch98en.aspx
	
	Outlook 97:
	
	  http://office.microsoft.com/downloads/9798/arch97en.aspx
	
	On the computers that use offline Address Books:
	
	4. Delete all the offline Address Book files (all files ending in .oab).
	
	5. Start Outlook.
	
	6. Perform a complete offline Address Book download with full details.
	
	The following files will be updated by the Archive Patch:
	
	+----------------------------------------------------------------------------------------+
	| File name                                    | Outlook 97 version | Outlook 98 version | 
	+----------------------------------------------------------------------------------------+
	| Emsabp32.dll                                 | 5.5.2502           | 5.5.2502           | 
	+----------------------------------------------------------------------------------------+
	| Emsui32.dll                                  | 5.5.2513           | 5.5.2513           | 
	+----------------------------------------------------------------------------------------+
	| Mspst32.dll                                  | 5.5.2551           | 5.5.2551           | 
	+----------------------------------------------------------------------------------------+
	| Emsmdb32.dll                                 | 5.5.2440           | 5.5.2440           | 
	+----------------------------------------------------------------------------------------+
	| Outllib.dll                                  | 8.04.00.6419       | 8.5.6204           | 
	+----------------------------------------------------------------------------------------+
	| Omipst9.dll (or Omipstnt.dll for Windows NT) | N/A                | 5.5.2232.19        | 
	+----------------------------------------------------------------------------------------+
	
	
	
	Additional query words: oab; offline address book; wrong recipients; corrupt; 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          : kbOutlook98 kbOutlook98bug kbOutlook98fix kbOutlook850 kbOutlook850bug kbOutlook850fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
