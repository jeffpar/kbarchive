---
layout: page
title: "Q116466: Gtwy: One Off Free Form Addressing Formats for PC Mail"
permalink: /kb/116/Q116466/
---

## Q116466: Gtwy: One Off Free Form Addressing Formats for PC Mail

{% raw %}

	Article: Q116466
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateways, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of the free form addressing formats for Microsoft Mail Gateways
	for access with Microsoft Mail for Windows. The address formats include
	addressing from Microsoft Mail to the following address types.
	
	NOTE: Free form addressing means that instead of picking a recipient from a
	address list, the sender can type in the address, in formats described below, in
	the To: field of the Windows Mail client. The customer must have an existing
	gateway to the mail environment the message is addressed to. AT&T
	
	  [SMTP:attmail!username]
	
	  Example: [SMTP:Gatename!JohnS]
	
	FAX
	
	  [FAX:recipient\r location\r company\r phonenumber\r]
	
	  Example: [FAX:Johns\r Mail_Campus\r Microsoft\r 9,12061234567\r]
	
	MCI (REMS)
	
	  [MCI:name\r EMS:REMS account#\r MBX:address]
	
	  Example: [MCI:JohnS\r EMS:MCI Mail\r MBX:123-4567]
	
	MHS
	
	  [MHS:Mailbox@gateway]
	
	  Example: [MHS:JohnS@Maingate]
	
	  [MHS:User@gateway {Network/Postoffice}]
	
	  [MHS:User@gateway {Network/Postoffice/mailbox}]
	
	  Example: [MHS:John Smith@Maingate {Microsoft/WGA/JohnS} (66 characters
	  optional comments)]
	
	Microsoft Mail Connection (3.2)
	
	  [PCM:Proxynet\Proxypo\mailbox]
	
	  Example: [PCM:Proxnet1\Proxpo1\JohnS]
	
	Microsoft Mail for PC Networks
	
	  [MS:NETWORK/POSTOFFICE/USERID]
	
	  where:
	
	  NETWORK/POSTOFFICE/USERID is 10/10/10
	
	PROFS
	
	  [PROFS:gateway/node/userid]
	
	  Example: [PROFS:Profsgty/WGADiv/JohnS]
	
	SMTP
	
	  [SMTP:userid@domain]
	
	  Example: [SMTP:JohnS@Microsoft.com]
	
	SNADS
	
	  [SNADS:gateway/DGN/DEN]
	
	  Example: [SNADS:SMTPgtwy/PSS/JohnS]
	
	X400
	
	  [X400:c=CountryCode;a=AdminDomain;p=PDN;o=OrgName;g=GivenName;s=Surname;
	  i=initials;q=genqual;ou1=OrgUnit]
	
	  Example: [X400:c=US;a=WGA;p=PSS;o=Microsoft;g=JohnS;s=Smith;i=JS]
	
	Any text placed before the brackets is considered to be an alias when the Windows
	client places the address in your personal address list.
	
	MORE INFORMATION
	================
	
	These address types are not commonly used: 3COM
	
	  [SMTP:UseRName:Domain;Organization]
	
	  Example: [SMTP:JohnS:NorthAmerica:Microsoft]
	
	MCI User (MCI Mail account number or name)
	
	  [MCI:John Doe\r EMS:MCI Mail\r MBX:123-4567]
	
	  Paper:
	
	  [MCI:John Doe\r EMS:MCI Mail\r MBX:Company:ABC, Inc.\r
	  MBX:Country:Canada\r MBX:Line1:100 - 123 Main Street\r
	  MBX:Line2\r
	  MBX:City:Vancouver\r MBX:State:B.C.\r MBX:Code:V6B 1A1\r
	
	  TELEX:
	
	  TO:MCI:John Doe\r EMS:MCI Mail\r MBX:Country:-\r
	  MBX:Telex:6501234567\r MBX:Answerback:650765432\r
	
	  FAX:
	
	  TO:MCI:John Doe\r EMS:MCI Mail\r
	  MBX:FAXNo:604-123-4567\r
	  MBX:retry:4.0\r
	  MBX:Company:ABC Company Inc.\r MBX:SFax:604-111-1111\r
	  MBX:SPhone:604-222-2222\r
	
	The actual message body requires a header separator after the TEXT: token. That
	is, the first line after TEST: should be a line of 78 dash (-) characters to
	separate the header from the message body. Include these 78 characters in the
	TEXT count.
	
	Microsoft Mail Connection (1.0B)
	
	  [MSMAIL:userid@MS Mail Server]
	
	  Example: [MSMAIL:JohnS@AppleTServer]
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbPTProdChange kbMailSearch kbMailGateSearch
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
