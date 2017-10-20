---
layout: page
title: "Q255132: ACC2000: &quot;Stop 0x1e&quot; Creating Report with Access Report Wizard"
permalink: /kb/255/Q255132/
---

## Q255132: ACC2000: &quot;Stop 0x1e&quot; Creating Report with Access Report Wizard

{% raw %}

	Article: Q255132
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta w2000print
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a Microsoft Access report by using the Microsoft Access
	Report Wizard, you may receive the following error message:
	
	  STOP 0x0000001E (KMODE_EXCEPTION_NOT_HANDLED)
	
	CAUSE
	=====
	
	This behavior can occur if you are printing to a Hewlett-Packard (HP) LaserJet
	8100 with Hewlett-Packard printer drivers.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest driver for your printer
	from the Hewlett-Packard Web site. For information about how to contact
	Hewlett-Packard, click the appropriate article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	To work around this behavior, install a generic printer driver. Set the generic
	printer as the default printer when you are using the Access Report Wizard to
	create a report. Use the HP driver when you print the report.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kberrmsg kbdta w2000print 
	Technology        : kbAccessSearch kbAccess2000 kbAccess2000Search
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
