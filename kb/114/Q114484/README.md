---
layout: page
title: "Q114484: WD97: Delivery Point Bar Code Option Unavailable Envelope Merge"
permalink: kb/114/Q114484/
---

## Q114484: WD97: Delivery Point Bar Code Option Unavailable Envelope Merge

	Article: Q114484
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta kbenvelope word97 kbmerge kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create envelopes as part of a mail merge operation, the Delivery Point
	Bar Code and FIM-A Courtesy Reply Mail options are unavailable (appear dimmed).
	
	CAUSE
	=====
	
	The Barcode option on the envelope dialog may appear dimmed if a country other
	than United States is selected in the International (Regional Settings in
	Windows 95 or later) dialog box in Control Panel.
	
	WORKAROUND
	==========
	
	When you create an envelope mail merge in Word 97 with the FIM-A option enabled
	and you choose any data source, the FIM-A barcode will not be added to the mail
	merge main document.
	
	To work around this problem, manually add the FIM-A barcode to the mail merge
	main document. To do this, follow these steps:
	
	1. Using the Drawing toolbar, add a text box to the envelope in the approximate
	  location and size for the FIM-A barcode.
	
	2. Place the insertion point inside the text box.
	
	3. Type the following field code, where Postal_Code is the name of the field
	  containing the zip codes in your data file. (To create the curly braces,
	  press CTRL+F9):
	
	  {BARCODE "{Mergefield Postal_Code}" \u \f "a" \* mergeformat}
	
	4. Press ALT+F9, if necessary, to view the FIM-A.
	
	5. Drag the text box if necessary, to adjust the position of the FIM-A.
	
	6. Proceed with the mail merge.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The FIM (Facing Identification Mark) identifies the front side of the envelope.
	
	There are two situations where the FIM-A feature is used: when you create a
	single envelope outside of a mail merge, and when you perform an envelope mail
	merge. To add the FIM-A to your envelopes, use the appropriate method for your
	situation.
	
	Single Envelope
	---------------
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. On the Envelopes tab, click Options.
	
	3. On the Envelope Options tab, click to select the Delivery Point Barcode check
	  box. The "FIM-A courtesy reply mail" check box becomes available.
	
	4. Click to select the "FIM-A courtesy reply mail" check box.
	
	Envelope Mail Merge
	-------------------
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Main Document, click Create and then click Envelopes.
	
	3. Click New Main Document to create a new document for the envelopes.
	
	4. Under Data Source, click Get Data to attach a data file or to create a new
	  data file.
	
	5. After you have attached the data file, click Set Up Main Document.
	
	6. In the Envelope Options dialog box, click OK.
	
	7. In the Envelope Address dialog box, click "Insert Postal Bar Code."
	
	8. In the "Merge field with ZIP code" list, click the field name that contains
	  the ZIP code.
	
	9. Click to select the "FIM-A courtesy reply mail" check box, which is now
	  available.
	
	NOTE: If your data source is the Personal Address Book, selecting the FIM-A check
	box will not generate a FIM-A on the main document for the envelope mail merge.
	
	REFERENCES
	==========
	
	For additional information about barcodes please see the following articles in
	the Microsoft Knowledge Base.
	
	  Q107789 Mail Merge Attached Envelope Does Not Create Barcode
	
	  Q105576 WD: Position of Bar Codes Is Certified by U.S. Postal Service
	
	Or, click the Office Assistant, type "barcodes" (without the quotation marks),
	click Search, and then click the "Field codes: Barcode field" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: FIM-A dim dimmed grey greyed gray grayed out not available disabled barcode label fima personal address book
	
	======================================================================
	Keywords          : kbprint kbdta kbenvelope word97 kbmerge kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
