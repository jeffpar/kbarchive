---
layout: page
title: "Q165528: WD97: Contprel.dot Template Missing AutoText Entries"
permalink: /kb/165/Q165528/
---

## Q165528: WD97: Contprel.dot Template Missing AutoText Entries

{% raw %}

	Article: Q165528
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbautotext word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Contemporary Press Report template (Contprel.dot) from the
	Value Pack or Web site and then click on Template in the Style Gallery, you will
	receive the following message when you click the Example preview radio button:
	
	  There is no example for this template
	
	CAUSE
	=====
	
	The Word 97 template Contemporary Press Release (Contprel.dot) that ships as
	part of the Value Pack is missing the Gallery Example AutoText entry. The other
	two optional Press Release templates, Professional Press Release (Profprel.dot)
	and Elegant Press Release (Elegprel.dot), both contain the Gallery Example
	AutoText entry.
	
	The Style Gallery uses the Gallery Example AutoText for the Example preview.
	Without it, you will not have an Example preview available.
	
	WORKAROUND
	==========
	
	You can create a Gallery Example AutoText entry for the template by following
	these steps:
	
	1. Open the Contemporary Press Release (Contprel.dot) template.
	
	2. On the Edit menu, click Select All.
	
	3. On the Insert menu, point to AutoText, and click AutoText.
	
	4. In the "Look in" list, click CONTPREL (Template).
	
	5. For the AutoText name, type "Gallery Example" (without the quotation marks),
	  and click Add.
	
	6. Save and Close the template.
	
	You will now have a preview when you go to the Style Gallery, click the template
	and click the Example preview choice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	"Gallery Example" is a special AutoText entry that the Style Gallery displays
	when you choose the Example preview. "Gallery Style Samples" is a special
	AutoText entry that the Style Gallery displays when you choose the Style Samples
	preview.
	
	
	REFERENCES
	==========
	
	For more information on using the Gallery Example and Gallery Style Samples
	AutoText entries with the Style Gallery, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q105700 Creating Example Text and Style Samples for Style Gallery
	
	For information on using the Style Gallery, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q142750 How to Use Examples Found in the Style Gallery
	
	In the online help, click the Office Assistant, type "style gallery" (without the
	quotation marks), click Search, and then click one of the following topics.
	
	- View or copy styles from another template.
	
	- Use settings from another document or template.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For information on how to obtain the Contemporary Press Release template in
	addition to other supplemental templates, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q155945 Additional Word Templates Are Available in the ValuPack Folder
	
	  Q163549 WD97: Downloads and Updates Available from Microsoft
	
	Additional query words: error blank
	
	======================================================================
	Keywords          : kbusage kbautotext word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
