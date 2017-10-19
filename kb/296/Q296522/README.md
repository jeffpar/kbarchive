---
layout: page
title: "Q296522: XADM: Can't Move Exch 5.5 Mailboxes w/ AD Users &amp; Computers"
permalink: /kb/296/Q296522/
---

## Q296522: XADM: Can't Move Exch 5.5 Mailboxes w/ AD Users &amp; Computers

	Article: Q296522
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	This article discusses a Beta release of a Microsoft product. The information in this article is provided as-is and is subject to change without notice.
	
	No formal product support is available from Microsoft for this Beta product. For information about how to obtain support for a Beta release, see the documentation that is included with the Beta product files, or check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the following scenario
	
	- An Exchange 5.5-based computer is running in a Windows 2000 domain with
	  Active Directory.
	
	- The Exchange Server 5.5 directory is linked with the Active Directory
	  Connector (ADC).
	
	- You ran Exchange 2000 Setup with the forestprep option.
	
	you encounter the following symptoms:
	
	- When you attempt to move mailboxes, you are unable to do so, and you receive
	  an "Invalid ADSI pathname" error message.
	
	- Many users are missing homeMDB, homeMTA, or both.
	
	- The following events are logged in the Application log:
	
	  Event Type: Warning
	  Event Source: MSADC
	  Event Category: Replication
	  Event ID: 8294
	  Description:
	  The homeMDB attribute is not present on the import object CN=<DN>. This
	  can happen when ADC does not have permissions to see all links. Please ensure
	  that the ADC has Read permissions to the all of the source directory,
	  including the Microsoft Exchange Configuration Container. (Connection
	  Agreement '<CA Name>' #1812)
	
	  Event Type: Warning
	  Event Source: MSADC
	  Event Category: Replication
	  Event ID: 8294
	  Description:
	  The homeMTA attribute is not present on the import object CN=<DN>. This
	  can happen when ADC does not have permissions to see all links. Please ensure
	  that the ADC has Read permissions to the all of the source directory,
	  including the Microsoft Exchange Configuration Container. (Connection
	  Agreement '<CA Name>' #1812)
	
	CAUSE
	=====
	
	When you run the Exchange 2000 setup /forestprep command, the Enterprise
	information is imported into Active Directory. Removing and adding several
	servers into the environment after you run forestprep causes the information in
	Active Directory to be out of date. Active Directory Users and Computers and the
	ADC try to reference this outdated information, which results in the symptoms
	that are listed in the "Symptoms" section in this article.
	
	RESOLUTION
	==========
	
	To resolve this behavior, add an Exchange 2000 server into the environment. By
	doing so, the Site Replication Service and a Configuration Connection Agreement
	are installed, which updates the information in Active Directory.
	
	WORKAROUND
	==========
	
	To work around this behavior, do not make server changes after you run
	forestprep.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
