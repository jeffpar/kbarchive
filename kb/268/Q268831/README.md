---
layout: page
title: "Q268831: XADM: Event 1025, Error 0xfffff9bb"
permalink: kb/268/Q268831/
---

## Q268831: XADM: Event 1025, Error 0xfffff9bb

	Article: Q268831
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or both of the following events may appear in the Exchange Server 5.5
	Application event log:
	
	  Event ID: 1025
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: General
	  Description: An error occurred.
	  Function name or description of problem: EcGenerateNRN:
	  Error 0xfffff9bb
	
	-or-
	
	  Event ID: 1025
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: General
	  Description: An error occurred.
	  Function name or description of problem: EcGenerateReadReport:
	  Error 0xfffff9bb
	
	CAUSE
	=====
	
	This warning is generated when the information store tries to create a record
	that has a non-unique key. The information store tries again with another key
	that is unique, and the write operation succeeds.
	
	RESOLUTION
	==========
	
	Run Isinteg.exe from the post-Exchange Server 5.5 Service Pack 3 (SP3)
	information store hotfix or later. See the "More Information" section for
	version information.
	
	The syntax for Exchange Server 5.5 is:
	
	  "isinteg -pri -fix -test alltests" (without the quotation marks)
	
	The syntax for Exchange 2000 Server is:
	
	  "isinteg -s servername -fix -test alltests" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The warning in the "Symptoms" section is not an indication of a failed operation
	or loss of functionality. The store recovers gracefully from the condition. If
	you perform the instructions in the "Resolution" section, you can prevent the
	condition that leads to the Application log warnings.
	
	The post-SP3 store hotfix resolves a number of issues that can cause 1025 Events
	in the EcGenerateNRN and EcGenerateReadReport functions. The hotfix includes a
	new version of Isinteg.exe that can fix the apparent problem that generates the
	events listed in the "Symptoms" section.
	
	The updated files include the following files and versions:
	
	+----------------------------+
	| File name   | File version | 
	+----------------------------+
	| Store.exe   | 5.5.2652.42  | 
	+----------------------------+
	| Isinteg.exe | 5.5.2652.33  | 
	+----------------------------+
	
	Note that the 1025 Event is a generic warning event, and that this article only
	applies if the function name and error code match.
	
	
	Additional query words: IS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
