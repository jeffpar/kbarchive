---
layout: page
title: "Q202082: SMS: Software Inventory Does Not List Individual Files"
permalink: /kb/202/Q202082/
---

## Q202082: SMS: Software Inventory Does Not List Individual Files

{% raw %}

	Article: Q202082
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) 2.0 Software Inventory reporting detail can be
	configured to report just the application, but not the files associated with the
	application. This is configurable in the Software Inventory Agent configuration
	screen under the Inventory Collection tab in the SMS Administrator console.
	
	MORE INFORMATION
	================
	
	The options are listed under "Reporting Detail." From there, you can specify the
	level of inventory file information that you want reported. For SMS to report
	information on inventoried files, you must select at least one check box:
	
	Product version information:
	----------------------------
	
	Information about "known" products (products that have company name, product
	name, version, and language) is inventoried and displayed per manufacturer in
	Resource Explorer. By default, this check box is selected.
	
	Files associated with known products:
	-------------------------------------
	
	Resource Explorer lists files associated with the inventoried products. For
	example, Resource Explorer would associate Wwintl32.dll with Microsoft Word.
	This check box is available only when Product version information is selected.
	By default, this check box is cleared.
	
	Files not associated with known products:
	-----------------------------------------
	
	Files that do not include company and product information are inventoried and
	displayed in the Resource Explorer Unknown list. By default, this check box is
	selected.
	
	Additional query words: prodsms sinv32 sms20
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
