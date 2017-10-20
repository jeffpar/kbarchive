---
layout: page
title: "Q170342: WD97: How to Add Templates to the Letter Wizard"
permalink: /kb/170/Q170342/
---

## Q170342: WD97: How to Add Templates to the Letter Wizard

{% raw %}

	Article: Q170342
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to add a custom page design (template) to the list of
	available page designs in the Letter Wizard and how to use the template.
	
	To run the Letter Wizard, click Letter Wizard on the Tools menu.
	
	NOTE: Available page designs (templates) in the Letter Wizard are on the Letter
	Format tab in the "Choose a page design" list.
	
	MORE INFORMATION
	================
	
	How to Create a New Custom Page Design for the Letter Wizard
	------------------------------------------------------------
	
	To create a new custom page design in the Letter Wizard, do the following steps:
	
	NOTE: This example demonstrates how to add your company name, company address,
	and company slogan to a new custom page design in the Letter Wizard based on the
	Contemporary Letter.dot template. If you want to create a custom page design
	based on a different default template, use steps similar to the following
	example.
	
	1. On the File menu, click New.
	
	2. On the Letters & Faxes tab, click to select Contemporary Letter. Under
	  Create New, click to select Template and then click OK.
	
	  NOTE: A new template appears that contains the styles required by the Letter
	  Wizard as outlined in the table listed later in this article.
	
	3. Click to select the text "[Click here and type return address]", and type
	  your company's address. Be sure to press ENTER to start a new address line.
	
	4. Select the text "Company Name Here", and type your company name.
	
	5. At the bottom of the page, click the text "[Click here and type slogan]", and
	  type your company's slogan.
	
	  NOTE: If your company does not have a slogan, or if you do not want to include
	  the slogan in your custom page design, press DELETE to delete this text.
	
	6. There are some "fields" and text that you do not need in your custom page
	  design because the Letter Wizard automatically adds these. Under your company
	  name (which you typed in step 4), select the line that contains the date.
	  Continue the selection to include everything down to and including the text
	  "[Click here and type job title]" and then press DELETE.
	
	7. On the Edit menu, click Select All.
	
	8. On the Insert menu, point to AutoText and click AutoText.
	
	9. On the AutoText tab, change the Look in box to the page design (template) you
	  are creating. For example, change the Look in box to Template1 (template).
	
	10. Select Gallery Example and click Add.
	
	11. When the following prompt is displayed, click Yes.
	
	  Do you want to redefine the AutoText entry?
	
	12. With the document still selected, point to AutoText on the Insert menu and
	  click AutoText.
	
	13. On the AutoText tab, the Look in box should still be pointing to the
	  template you are creating. If it does not, change the Look in box to your
	  new template (page design). For example, change the Look in box to Template1
	  (template).
	
	14. In the "Enter AutoText entries here" box, type a name for this letter page
	  design. For example, type Monthly Letter and click Add.
	
	  NOTE: After the Letter Wizard finishes, you need to add this AutoText entry
	  back to your letter to complete it. The Letter Wizard does not add this
	  "boilerplate" text automatically.
	
	15. With the document still selected, press DELETE to remove the "boilerplate"
	  text. This "boilerplate" text is added back after you finish the Letter
	  Wizard.
	
	16. On the File menu, click Save As.
	
	17. Change the Save in box to the following folder:
	
	  C:\Program Files\Microsoft Office\Templates\Letters & Faxes
	
	NOTE: Your new custom page design template must be saved to this folder in order
	for the Letter Wizard to use it.
	
	18. In the File name box, type a name for your custom page design template. For
	  example, type Monthly Letter.dot and click Save.
	
	  NOTE: The file name of the new custom letter template must contain the word
	  "Letter" (for example the template name should be something like "Monthly
	  Letter.dot").
	
	19. On the File menu, click Close.
	
	How to Create a Letter Using Your Custom Page Design in the Letter Wizard
	-------------------------------------------------------------------------
	
	1. On the Tools menu, click Letter Wizard.
	
	2. On the Letter Format tab, change the "Choose a page design" box to your
	  custom page design. For example, change the "Choose a page design" box to
	  Monthly Letter.
	
	  NOTE: The preview of your custom page design should appear in the page design
	  preview box.
	
	3. Make the changes you want to the Letter Format, Recipient Info, Other
	  Elements, and Sender Info tabs.
	
	  NOTE: Leave the Sender's name and Return address boxes blank on the Sender
	  Info tab, because this information was filled out in your custom page design.
	
	4. Click OK to complete the Letter Wizard.
	
	5. Move the insertion point to the top of the letter. The insertion point should
	  be to the left of the date or the recipient information.
	
	6. On the Insert menu, point to AutoText and click AutoText.
	
	7. On the AutoText tab, change the Look in box to your custom page design
	  (template). For example, change the Look in box to Monthly Letter.dot (global
	  template).
	
	8. Click to select Monthly Letter in the "Enter AutoText entries here" box, and
	  click Insert.
	
	Your basic letter based on your new custom page design created by the Letter
	Wizard is now displayed. Complete your letter by typing your letter where the
	text "Type your text here" appears.
	
	Additional Information
	----------------------
	
	The Letter Wizard contains three default templates: Contemporary Letter.dot,
	Elegant Letter.dot, and Professional Letter.dot. For the Letter Wizard to
	function correctly, certain styles must be contained and applied in each
	template.
	
	The following table contains the default styles for the Letter Wizard. This list
	also indicates which styles are used in which template.
	
	  Style                         Contemporary  Elegant     Professional
	  name                          Letter.dot    Letter.dot  Letter.dot
	  --------------------------------------------------------------------
	
	  Attention Line                    X            X            X
	  Body Text                         X            X            X
	  Cc List                           X            X            X
	  Closing                           X            X            X
	  Company Name                      X            X            X
	  Date                              X            X            X
	  Default Paragraph Font            X            X            X
	  Emphasis                          X            X            X
	  Enclosure                         X            X            X
	  Footer                            X                         X
	  Header                            X            X            X
	  Heading 1                         X            X            X
	  Heading 2                         X            X            X
	  Heading 3                         X            X            X
	  Heading 4                         X            X            X
	  Heading 5                         X            X            X
	  Heading 6                         X            X            X
	  Heading Base                      X            X            X
	  Inside Address                    X            X            X
	  Inside Address Name               X            X            X
	  List                              X            X            X
	  List Bullet                       X            X            X
	  List Number                       X            X            X
	  Mailing Instructions              X            X            X
	  Normal                            X            X            X
	  Page Number                       X
	  Reference Initials                X            X            X
	  Reference Line                    X            X            X
	  Return Address                    X            X            X
	  Salutation                        X            X            X
	  Signature                         X            X            X
	  Signature Company                 X            X            X
	  Signature Job Title               X            X            X
	  Slogan                            X            X            X
	  Subject Line                      X            X            X
	
	For additional information about changes you can make in a template, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q157843 WD97: Adding AutoText to the AutoText Menu
	
	  Q161612 WD97: Letter Wizard Replaces Merge Field with AutoTextList
	
	  Q109681 WD: Creating Template with First Page or Odd/Even Header/Footer
	
	  Q141993 WD: General Information About Section Breaks
	
	  Q95277 WD: How to Create a Watermark in Word
	
	Additional query words: word97 8.0
	
	======================================================================
	Keywords          : kbusage kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
