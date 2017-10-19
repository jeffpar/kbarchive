---
layout: page
title: "Q250500: XADM: Sybari Antigen Software Interaction with Exchange Server"
permalink: /kb/250/Q250500/
---

## Q250500: XADM: Sybari Antigen Software Interaction with Exchange Server

	Article: Q250500
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides Microsoft Product Support Services (PSS) with information
	about how Sybari Antigen software interacts with Exchange Server and Antigen
	software support boundaries.
	
	MORE INFORMATION
	================
	
	Sybari has released Antigen software for Exchange Server 5.5, Exchange 2000
	Server, and Exchange 2000 Enterprise Server. Antigen is a unique virus-scanning
	program, and it is important for Microsoft Support Professionals to understand
	the way that Antigen software works and what the Microsoft position is on this
	product.
	
	How Antigen Works
	-----------------
	
	Sybari uses unsupported interfaces between the information store and the
	Extensible Storage Engine (ESE). At the time of the publication of this article
	no instances of corruption have been reported, but customers who use Antigen run
	the risk of database corruption and potential data loss if there are errors in
	Sybari Antigen implementation.
	
	During installation, Antigen changes the Exchange Server Information Store
	service so that it is dependent on the Sybari Antigen service. This ensures that
	the Antigen service starts before the Exchange Server Information Store service
	starts. During the startup process, the Antigen service checks for appropriate
	versions of Antigen and Exchange Server, and appropriate file versions. If any
	incompatibility is found, Antigen disables itself, enables the information store
	to start (without antivirus protection), and notifies administrators.
	
	When Antigen starts successfully, the Microsoft version of the Ese.dll file is
	temporarily renamed to Xese.dll and the Sybari version of the Ese.dll file is
	put in its place. After the Sybari version of the Ese.dll file is loaded, the
	Microsoft version is renamed back to Ese.dll and the Exchange Server information
	store is enabled to complete its startup process.
	
	The Microsoft Position on Sybari Antigen
	----------------------------------------
	
	Based upon research on Sybari Antigen and the proven track record of the product,
	Microsoft acknowledges that this product is an innovative solution to meet the
	antivirus needs of customers. Customers who contact Microsoft Product Support
	Services may be asked to disable the Sybari Antigen service to help identify
	issues, but customers are free to re-enable the software after the root cause of
	the issue is properly diagnosed. Microsoft and Sybari agree that this is a valid
	troubleshooting step to determine the cause of issues. To make this process as
	simple as possible, Sybari includes a command-line utility with Antigen, the
	Antutil.exe utility, that enables customers to quickly disable (/disable) and
	enable (/enable) the Antigen service without removing the software. By default,
	a copy of this file is installed in the following folder:
	
	  Program Files\Sybari Software\Antigen for Exchange
	
	
	
	If a potential issue exists with the Sybari Antigen software or if Sybari Antigen
	may be contributing to an issue, Sybari requests that you include Sybari
	Technical Support (631-630-8500) in the discussions to resolve the issue, so
	that Sybari can help identify the cause of the issue. If, after the customer
	disables Antigen, the issue persists, the customer may re-enable Antigen.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ese dll xese antutil exe
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv kbExchange2000EntServ
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
