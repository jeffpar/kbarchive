---
layout: page
title: "Q264221: Year 2000 Product Analyzer Database Not Updated After March 2000"
permalink: kb/264/Q264221/
---

## Q264221: Year 2000 Product Analyzer Database Not Updated After March 2000

	Article: Q264221
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbDatabase kbsms200 kbsms200bug kbProdComp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Year 2000 Product Analyzer tool, the database is not updated.
	You may receive a message stating that the location or file is no longer
	available.
	
	CAUSE
	=====
	
	The product database will not be updated or modified after March, 2000.
	
	WORKAROUND
	==========
	
	You can configure the Year 2000 Product Analyzer tool to update the database
	every thirty days. To prevent this from occurring after March, 2000:
	
	1. Run the Y2kscan.exe tool from the Sms\Y2k\Y2kscan\<Platform> folder.
	
	2. Click the Next button to step through the Product Analyzer Wizard.
	
	3. Click Custom, and then click Next.
	
	4. In the Update Database dialog box, click to clear the Update Database check
	  box.
	
	5. Continue through the wizard to finish the configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about the Year 2000 Product Analyzer tool, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q224328 MPA -Microsoft Year 2000 Product Analyzer
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbYear2000 kbDatabase kbsms200 kbsms200bug kbProdComp 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
