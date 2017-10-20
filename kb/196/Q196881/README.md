---
layout: page
title: "Q196881: WD97: How to Modify the Sales Tax Form Field in Invoice.dot"
permalink: /kb/196/Q196881/
---

## Q196881: WD97: How to Modify the Sales Tax Form Field in Invoice.dot

{% raw %}

	Article: Q196881
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtemplate winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to change the Sales Tax Form Field Options for the
	Invoice and Purchase Order templates so that your results automatically update
	with a sales tax amount.
	
	MORE INFORMATION
	================
	
	To modify the Invoice or Purchase Order template so that the Sales Tax field is
	updated automatically, follow the steps:
	
	1. Copy the Invoice and Purchase Order templates from the ValuPack to the
	  Templates folder.
	
	  ValuPack\Template\Word folder on the Office 97 or Word 97
	  CD-ROM into the \Program Files\Microsoft Office\Templates folder.
	
	2. Open the Invoice or Purchase Order template and click Unprotect Document on
	  the Tools menu.
	
	3. On the Tools menu, point to Macro, and then click Macros. In the Macro Name
	  list, click Update_MAIN, and then click Edit.
	
	  The macro will be opened in the Visual Basic Editor.
	
	4. On the Edit menu, click Find. In the Find What box, type "SetFormResult"
	  (without the quotation marks), and then click Find Next. Click Cancel to quit
	  the Find dialog box.
	
	  SetFormResult will be highlighted.
	
	  This section of the macro contains the following two SetFormResult commands:
	
	  WordBasic.SetFormResult "Amount_" + rownnum$
	  WordBasic.SetFormResult "Subtotal"
	
	5. Add a blank line below the last WordBasic.SetFormResult statement, and then
	  type the following command on this blank line:
	
	  WordBasic.SetFormResult "SalesTax"
	
	  NOTE: The capitalization of SalesTax is important.
	
	6. On the File menu, click "Close and Return to Microsoft Word."
	
	7. Double-click the SalesTax form field.
	
	8. In the Text Form Field Options dialog box, select Calculation from the Type
	  list.
	
	  In the Expression box, enter the formula you want to use to calculate the
	  sales tax. Assuming your sales tax is 6 percent and you are performing the
	  sales tax on the subtotal field, type the following formula in the Expression
	  box for the specific template listed below:
	
	      Template         Formula   Comment
	
	      -------------------------------------------------------------------
	
	      Invoice          =D9*.06   where D9 is the table cell reference for
	                                 the subtotal amount.
	
	      Purchord         =E9*.06   where E9 is the table cell reference for
	                                 the subtotal amount.
	
	9. Click OK.
	
	10. On the Tools menu, click Protect Document, select Forms, and then click OK.
	
	11. Save and close the template.
	
	Additional query words: invoice.dot salestax update formfield purchord.dot
	
	======================================================================
	Keywords          : kbdta kbtemplate winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
