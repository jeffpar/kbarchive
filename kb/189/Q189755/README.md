---
layout: page
title: "Q189755: XADM: French Admin Reports Blank Password on Newly Created Windo"
permalink: /kb/189/Q189755/
---

## Q189755: XADM: French Admin Reports Blank Password on Newly Created Windo

{% raw %}

	Article: Q189755
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): exc55sp2fix kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the French Exchange Server Administrator program to create new
	mailboxes, the Administrator program may incorrectly indicate that the password
	for the Windows NT account is blank.
	
	Version 5.0
	-----------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	
	Version 5.5
	-----------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the French Exchange Server
	versions 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	When the Windows NT Account Policy is set to have a minimum password length, the
	Exchange Server administrator program is responsible for creating the Windows NT
	account and the password for the account. For example, set the Windows NT
	Account Policy to have a minimum password length of ten characters. From the
	Exchange Server Administrator program, create a mailbox named Test. For the
	primary account, choose to create a new Windows NT account. After the account is
	created, the following dialog will appear:
	
	  Le compte Windows NT que vous venez de creer a un mot de posse vide.
	  L'utilisateur devra changer le mot de passe lors de sa premiere
	  overature de session.
	
	The first part says that the password is blank or empty (vide). This is actually
	wrong because the Administrator program created the account with a password of
	"testxxxxxx". This can be verified by connecting to the server or by logging
	onto the server, if the account is given the appropriate privileges.
	
	Additional query words: crash route XADM create users admin french france
	======================================================================
	Keywords          : exc55sp2fix kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
