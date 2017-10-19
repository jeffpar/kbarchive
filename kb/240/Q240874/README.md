---
layout: page
title: "Q240874: XFOR: Connecting GroupWise Systems over Exchange Server"
permalink: /kb/240/Q240874/
---

## Q240874: XFOR: Connecting GroupWise Systems over Exchange Server

	Article: Q240874
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is now possible to connect two separate GroupWise mail systems over Microsoft
	Exchange Server 5.5 as a backbone with the latest Microsoft Exchange Connector
	for Novell GroupWise (available with Exchange Server 5.5 Service Pack 3). This
	article describes the idea and limitations of this procedure, as well as
	step-by-step instructions for implementing it.
	
	MORE INFORMATION
	================
	
	For general information regarding the features and configuration of the Exchange
	GroupWise Connector, please refer to the documentation in the Gwconn.rtf file
	provided with the Exchange Server 5.5 Service Pack 3 CD, or located in the
	Exchsrvr\Connect\Exchconn\Docs folder after installation. This article assumes
	that the reader has a good understanding of the Exchange Server 5.5 mail server
	and the Exchange GroupWise Connector.
	
	For the purpose of this article, assume the following scenario: Two separate
	GroupWise mail systems and one Exchange Server site with two Exchange Server
	computers. The requirement is to send e-mail between all mail systems and
	maintain a global directory list in both mail systems spanning all users in the
	organization.
	
	+-------------------------------------------------+
	| GroupWise domain name:               | GWDOM1   | 
	+-------------------------------------------------+
	| GroupWise post office name:          | GWPO1    | 
	+-------------------------------------------------+
	| Exchange Server foreign domain name: | EXCHANGE | 
	+-------------------------------------------------+
	
	+-------------------------------------------------+
	| GroupWise domain name:               | GWDOM2   | 
	+-------------------------------------------------+
	| GroupWise post office name:          | GWPO2    | 
	+-------------------------------------------------+
	| Exchange Server foreign domain name: | EXCHANGE | 
	+-------------------------------------------------+
	
	+-----------------------------------------+
	| Exchange Server site name:  | EXCHSITE1 | 
	+-----------------------------------------+
	| Server connected to GWDOM1: | EXCHSRV1  | 
	+-----------------------------------------+
	| Server connected to GWDOM2: | EXCHSRV2  | 
	+-----------------------------------------+
	
	Directory Synchronization
	-------------------------
	
	The default mapping rules for the Exchange GroupWise Connector can synchronize
	all Exchange Server mailboxes and non-GroupWise custom recipients (CRs) with
	each GroupWise mail system. To be able to synchronize GroupWise CRs from GWDOM1
	into GWDOM2, the mapping rules and tables need to be modified. For more
	information on mapping rules, please refer to the Appendix section of the
	GroupWise documentation.
	
	Apply the following steps to both Exchange Server computers with Exchange
	GroupWise Connectors:
	
	1. Using Notepad, open the Mexamap.tbl file. The mapping tables are in the
	  Dxagwise folder located under Exchsrvr\Connect\Exchconn.
	
	2. Add the following line to the end of the list of attributes:
	
	GWISEADDR2      128 Secondary-Proxy-Addresses(gwise:)
	
	The resulting file should look similar to the following:
	
	DN	        256 Obj-Dist-Name
	TA	        256 Target-Address
	ACCOUNT          32 Assoc-NT-Account
	ALIAS            64 Mail-nickname
	FULLNAME        128 Display-Name
	FIRSTNAME        64 Given-Name
	INITIALS          5 Initials
	LASTNAME         64 Surname
	COMPANY          64 Company
	DEPARTMENT       64 Department
	TITLE            32 Title
	OFFICE           64 Physical-Delivery-Office-Name
	PHONE            33 Telephone-Office1
	FAX              33 Telephone-Fax
	MOBILEPHN        33 Telephone-Mobile 
	USNCREATED       12 USN-Created
	GWISEADDR       128 Proxy-Addresses(GWISE:)
	GWISEADDR2      128 Secondary-Proxy-Addresses(gwise:)
	
	3. Open the Mapgwise.tbl file and add the following line:
	
	GWISEADDR2      = "EXCHANGE." POSTOFFICE "." OBJECT
	
	The resulting file should look similar to the following:
	
	TA              = "GWISE:" DOMAIN "." POSTOFFICE "." OBJECT
	DN              = DOMAIN "." POSTOFFICE "." OBJECT
	ALIAS           = OBJECT
	FULLNAME        = ISEQUAL(FIRSTNAME AND(" ", LASTNAME), "", ISEQUAL(FIRSTNAME, "", ISEQUAL(LASTNAME, "", OBJECT, LASTNAME), FIRSTNAME), TRIM(FIRSTNAME AND(" ", LASTNAME),"B"))
	FIRSTNAME       = FIRSTNAME
	LASTNAME        = LASTNAME  
	DEPARTMENT      = DEPARTMENT
	TITLE           = TITLE
	PHONE           = PHONE
	FAX             = FAX
	GWISEADDR2      = "EXCHANGE." POSTOFFICE "." OBJECT
	
	4. Open the Mapmex.tbl file and change the following line
	
	  GWADDR          = GWISEADDR
	
	  to the following:
	
	GWADDR          = ISEQUAL(STRIP(GWISEADDR,".","L","R"), "EXCHANGE",GWISEADDR,GWISEADDR2)
	
	5. Save all changes.
	
	The Exchange GroupWise Connector controls directory synchronization (dirsync) by
	checking that any changes to the GroupWise system are sent only if the GroupWise
	object belongs to the Exchange foreign domain. This is determined by the
	Exchange Foreign domain name field specified in the Options tab of the
	connector. By default, this name is EXCHANGE.
	
	The changes in the mapping tables will automatically generate secondary GWISE
	proxy addresses for all GroupWise CRs by concatenating EXCHANGE as the domain
	address and the GroupWise user's original GroupWise mailing address. For
	example, a user from GWDOM1 will have the following GWISE proxies
	
	GWISE:GWDOM1.GWPO1.GWUSER1
	gwise:EXCHANGE.GWPO1.GWUSER1
	
	where GWDOM1.GWPO1.GWUSER1 is the primary target GWISE address and
	EXCHANGE.GWPO1.GWUSER1 is the secondary GWISE address. This secondary address is
	the GWISE proxy address that is sent over to the other GroupWise system
	(GWDOM2).
	
	After you change the mapping tables, perform a full dirsync reload from GroupWise
	to Exchange Server on both Exchange GroupWise Connectors. Check that the
	GroupWise CRs now have a secondary GWISE proxy address with EXCHANGE as the
	domain field. Running a full dirsync reload from Exchange Server to GroupWise
	populates the GroupWise mail system with GroupWise users from the second
	GroupWise mail system.
	
	Messaging
	---------
	
	The default mail routing for the Exchange GroupWise Connector assumes that all
	mail destined for a GroupWise mail system traverses only one connector. Each
	GroupWise connector address space entry needs to be modified from the default
	GWISE:* address to a unique GWISE address. For example:
	
	EXCHSRV1-GroupWise Connector Address Space Entry
	
	+-----------------------+
	| Type:    | GWISE      | 
	+-----------------------+
	| Address: | GWDOM1.*.* | 
	+-----------------------+
	| Cost:    | 1          | 
	+-----------------------+
	
	EXCHSRV2-GroupWise Connector Address Space Entry
	
	+-----------------------+
	| Type:    | GWISE      | 
	+-----------------------+
	| Address: | GWDOM2.*.* | 
	+-----------------------+
	| Cost:    | 1          | 
	+-----------------------+
	
	If additional GroupWise domains are present, they need to be added to the address
	space list.
	
	In each GroupWise mail system, a second foreign domain representing the other
	GroupWise domain needs to be added. Note that current foreign domain EXCHANGE
	should already be in the GroupWise system. If GWDOM1 was the primary GroupWise
	domain, then GWDOM2 and EXCHANGE will be the two foreign domains for that
	GroupWise mail system. The GroupWise link configuration also needs to be
	modified so that this second foreign domain is linked to the API gateway.
	
	For more information on creating a foreign domain in GroupWise and linking it to
	the GroupWise API gateway, please refer to the Exchange GroupWise Connector
	documentation (Gwconn.rtf).
	
	Additional query words: lsdxa
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
