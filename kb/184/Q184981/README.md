---
layout: page
title: "Q184981: WD97: &quot;Can't Find Project or Library&quot; When You Run a Macro"
permalink: kb/184/Q184981/
---

## Q184981: WD97: &quot;Can't Find Project or Library&quot; When You Run a Macro

	Article: Q184981
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbdta kbvirus word8 word97
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you attempt to run a WordBasic macro that has been
	converted to a Microsoft Word Visual Basic for Applications macro, you may
	receive the following error:
	
	  Can't find project or library
	
	Also, while in the Visual Basic Editor, when you check the installed object
	libraries in the References dialog box (click References on the Tools menu) the
	Word object type library "Microsoft Word 8.0 Object Library" is missing.
	
	CAUSE
	=====
	
	If all of the symptoms described apply to you, and the compile error "Can't find
	project or library" occurs at command lines beginning with the WordBasic object,
	for example
	
	     x$ = WordBasic.GetFormResult$("Text1")
	
	your computer may be infected with the TWNO.A macro virus.
	
	WORKAROUND
	==========
	
	If you suspect that your computer is infected with a macro virus, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q181079 What to Do If You Have a Macros Virus
	
	  Q163932 Frequently Asked Questions About Word Macros Viruses
	
	For more information about macro virus protection software available from
	third-party vendors, click the following article number to see the article in
	the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	
	After you have made sure you have eradicated all possible macro viruses from your
	computer, documents and templates, and/or you are sure your computer, documents
	and templates are not infected, follow these steps to fix the template
	containing the converted WordBasic macros:
	
	1. Open the template containing the converted WordBasic macros:
	
	  a. On the File menu, click Open.
	
	  b. In the Files Of Type list, click "Document Templates(*.dot)."
	
	  c. Navigate to the folder containing the template.
	
	  d. In the list of files, click to select the template and click OK.
	
	     NOTE: If you are prompted to Enable Macros, or Disable Macros, click Enable
	     Macros.
	
	2. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	3. In the Visual Basic editor, click Project Explorer on the View menu.
	
	4. In the Project Explorer window, click to select your template project.
	
	5. On the Tools menu, click References.
	
	6. In the list of Available References, click to select any valid reference's
	  check box, and click OK.
	
	7. On the File menu click Save.
	
	8. On the File menu click "Close and Return to Microsoft Word."
	
	9. In Word, click Close on the File menu to close the template.
	
	10. Repeat steps 1-5.
	
	11. Click to clear the check box for the reference you added in step 6, and
	  click OK.
	
	12. On the Debug menu, click Compile <your template project name>.
	
	13. On the File menu, click Save.
	
	If the error continues to occur after performing these steps, quit all Microsoft
	Office programs that are running. Then, uninstall and reinstall Microsoft
	Office.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q158658 How to Completely Remove Microsoft Office 97
	
	Additional query words: can t
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbdta kbvirus word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
