---
layout: page
title: "Q264226: XCLN: No Entries in Directory Service Match LDAP Query Search"
permalink: /kb/264/Q264226/
---

## Q264226: XCLN: No Entries in Directory Service Match LDAP Query Search

{% raw %}

	Article: Q264226
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Express version 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you use Outlook Express to
	search the Exchange Server directory, even though your account is configured
	correctly:
	
	  There are no entries in the directory service that match your search.
	
	CAUSE
	=====
	
	Check the properties of the Outlook Express directory service account:
	
	1. On the Tools menu, click Accounts, and then click the Directory Service tab.
	
	2. Click the directory service account that you want to check, and then click
	  Properties.
	
	If the "Check names against this server when sending mail" check box is selected,
	this issue can occur.
	
	This option may have been enabled in the Internet Connection Wizard. When you set
	up a directory service account, the second dialog box that the Internet
	Connection Wizard displays states the following:
	
	  Your e-mail program checks the e-mail addresses of your message recipients
	  using one or more directory service address lists.
	
	  Using a directory service to check the e-mail addresses of your message
	  recipients may slow down the performance of your e-mail program.
	
	  Do you want to check addresses using this directory service?
	
	If you click Yes, the error message in the "Symptoms" section of this article can
	occur when you try to perform a search.
	
	If you click to clear the "Check names against this server when sending mail"
	check box, it does not resolve this issue.
	
	WORKAROUND
	==========
	
	To work around this issue, re-create the Outlook Express directory service
	account:
	
	1. On the Tools menu, click Accounts.
	
	2. Click Add, and then click Directory Service.
	
	3. Type the server name, and then click Next.
	
	4. Leave No selected by default, and then click Next.
	
	5. Click Finish.
	
	If you need to resolve e-mail addresses automatically:
	
	1. Complete the Internet Connection Wizard.
	
	2. On the Tools menu, click Accounts, and then click the Directory Service tab.
	
	3. Click the directory service account that you just created, and then click
	  Properties.
	
	4. Click to select the "Check names against this server when sending mail" check
	  box.
	
	Additional query words: LDAP
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpressNT400Search kbOutlookExpress500NT400
	Version           : WINDOWS:5; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
