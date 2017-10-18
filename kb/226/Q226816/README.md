---
layout: page
title: "Q226816: SMS: Installation Issues in Foreign Language Environments"
permalink: kb/226/Q226816/
---

## Q226816: SMS: Installation Issues in Foreign Language Environments

	Article: Q226816
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Systems Management Server 2.0 using a site where one
	of the following character sets is used
	
	   - Finnish
	
	- Swedish
	
	- Estonian
	
	- Turkish
	
	- Lithuanian
	
	Systems Management Server behaves abnormally and seems to have difficulty
	uniquely identifying individual client computers.
	
	CAUSE
	=====
	
	This behavior occurs because the Microsoft SQL Server data store for Systems
	Management Server is configured to use a sort order that does not differentiate
	between characters which, in one or more of the languages listed in the
	"Symptoms" section, are considered the same character. The following list
	describes some of these situations:
	
	- The letter "w" is equivalent to "v" in Estonian, Finnish, and Swedish.
	
	- The letter "y" is equivalent to "i" in Lithuanian.
	
	- The lowercase letter "i" is not equivalent to the uppercase "I" in Turkish.
	
	These differences may become an issue when two characters, such as V and W --
	which are different in character weight in English but are equivalent in
	character weight in Swedish and Finnish -- are used to compose Systems
	Management Server *unique* ID fields.
	
	WORKAROUND
	==========
	
	To work around this issue, configure your SQL Server data store for Systems
	Management Server to use a sort order that is "aware" of these
	character-set-specific differences. For example, the sort order "Swedish/Finnish
	(Std) dictionary order, case-ins., uppercase pref" is one such sort order
	available in both SQL Server 6.5 and SQL Server 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about sort order issues, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q194146 Nordic SQL Server Sort Orders Cause Inventory Problems
	
	Additional query words: prodsms evironments language
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
