---
layout: page
title: "Q263439: SMS: Online Admin Guide Incorrectly Refers to SP1 and Not SP2"
permalink: /kb/263/Q263439/
---

## Q263439: SMS: Online Admin Guide Incorrectly Refers to SP1 and Not SP2

	Article: Q263439
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200preSP3
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The online SMS Administrator's Guide refers to Service Pack 1 in multiple
	locations where it should reference Service Pack 2. This online guide is located
	in the Systems Management Server\Sms Administrator's Guide directory.
	
	Examples:
	
	Here are a few examples of documentation errors where Service Pack 1 should be
	appear instead of Service Pack 2:
	
	- In Appendix D, under "System Flow Charts":
	
	  For updated system flow charts, see the Online Help for SMS 2.0, Service Pack
	  1.
	
	- Under the "Product Analyzer Compliance Analysis" topic:
	
	  Compliance analysis using the Microsoft Year 2000 Product Analyzer involves
	  multiple steps. As a prerequisite to compliance analysis, you must obtain the
	  Year 2000 Product Analyzer from Microsoft. It is included in the SMS 2.0 SP1
	  compact disc and is installed automatically when you install the Product
	  Compliance feature. Or, you can download it from
	  http://www.microsoft.com/technet/year2k/resources/resources.htm.
	
	  The downloadable version of the product is likely to contain more up-to-date
	  database information than the version provided with SMS 2.0 SP1.
	
	- Under "Distribute the Year 2000 Product Analyzer" in the "Product Analyzer
	  Compliance Analysis Step 1" topic:
	
	  Select the "Create a new package from a definition" option. SMS 2.0 SP1
	  contains a template for creating this package. The wizard will offer you a
	  scrolling list of package definitions. Look for "Year 2000 Product Analyzer"
	  and select it.
	
	- In the "Determining Product Compliance" topic:
	
	  The second tool is the Microsoft Year 2000 Product Analyzer. This is a
	  stand-alone tool that ships with SMS SP1.
	
	- Under "Run Queries" in the "Product Analyzer Compliance Analysis Step 4"
	  topic:
	
	  The Resource Explorer displays Y2K information for one system at a time. Use
	  the SMS queries to aggregate the Y2K information across systems. SMS 2.0 SP1
	  comes with several compliance queries intended for use with the Year 2000
	  Product Analyzer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
