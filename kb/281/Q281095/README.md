---
layout: page
title: "Q281095: Active Directory Services For Windows 2000 Technical Reference C"
permalink: kb/281/Q281095/
---

## Q281095: Active Directory Services For Windows 2000 Technical Reference C

	Article: Q281095
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Active Directory Services for Microsoft Windows 2000 Technical Reference ISBN 0-7356-0624-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Active Directory Services For Microsoft
	Windows 2000 Technical Reference, ISBN 0-7356-0624-2.
	
	The following topics are covered:
	
	- Page 129: Incorrect Statement About Group Policy Inheritance
	
	- Page 130: Incorrect Statement About Group Policy Inheritance
	
	- Page 170: Incorrect Information About Distributed Security Client
	
	- Page 313: CaseIgnoreString Settings Incorrect
	
	- Page 357: Incorrect Information About Trust Relationship Between Domain Trees
	
	MORE INFORMATION
	================
	
	Page 129: Incorrect Statement About Group Policy Inheritance
	------------------------------------------------------------
	
	On page 129, it states that a Group Policy can be inherited/proagated across
	domains. This is incorrect. A Group Policy is never inherited across domains.
	You must explicitly link a GPO from another domain in order to apply Group
	Policies across domains.
	
	On page 129, ignore the first sentence in the last paragraph:
	
	"The reason these domains were put into this domain tree structure was so that a
	Group Policy could be set in the mfg.corp.iseminger.com domain and propagated to
	all domains in the tree."
	
	
	Page 130: Incorrect Statement About Group Policy Inheritance
	------------------------------------------------------------
	
	On page 130, it states that a Group Policy can be inherited/proagated across
	domains. This is incorrect. A Group Policy is never inherited across domains.
	You must explicitly link a GPO from another domain in order to apply Group
	Policies across domains.
	
	On page 130, ignore the third bulleted item:
	
	"A Group Policy can flow down a domain tree, and such inheritance can make the
	application of administratively controlled Group Policy objects easier to
	control."
	
	
	Page 170: Incorrect Information About Distributed Security Client
	-----------------------------------------------------------------
	
	On page 170, in the "Real World" box at the top of the page, remove:
	
	"If you aren't using Windows 2000 on all your clients, you can upgrade Windows
	95, Windows 98, and Windows NT 4 Server and Workstation computers to the
	Distributed Security Client. The distributed Security Client software is
	available free from http://www.microsoft.com and includes Kerberos V5 security
	software."
	
	Note: At the time of writing, the Distributed Security Client was in the works,
	and planned for release. Since publication, that software has been pulled and
	will not be offered by Microsoft.
	
	
	Page 313: CaseIgnoreString Settings Incorrect
	---------------------------------------------
	
	On page 313, in the table under the columns oMSyntax and attribute-Syntax, for
	CaseIgnoreString, change the settings from:
	
	"0 attributeSyntax 2.5.5.4"
	
	To:
	
	"20 attributeSyntax 2.5.5.4"
	
	
	Page 357: Incorrect Information About Trust Relationship Between Domain Trees
	-----------------------------------------------------------------------------
	
	On page 357, under "You can add a new domain tree to a forest", it states, both
	in the text and in Figure 13-1, that an explicit trust must be established
	between the forest root and the top domain of any trees that you add. This is
	incorrect.
	
	Change:
	"When you deploy multiple trees in a forest, you must establish an explicit trust
	between the forest root and the top domain of any trees that you add."
	
	To:
	"Each time you create a new domain tree in a forest, a two-way transitive trust
	relationship is created implicitly (automatically) between the forest root and
	the top domain of any trees that you add."
	
	Figure 3.1 is incorrect both in caption and illustration. For a correct
	illustration of the trust relationship between domain trees in a forest, please
	refer to the "Understanding domain trusts" section in Windows 2000 Server Help.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ITBOOK WIN2000 0-7356-0624-2 Iseminger
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
