---
layout: page
title: "Q197212: WD97: Envelope Address Positions Don't Stay Between Documents"
permalink: /kb/197/Q197212/
---

## Q197212: WD97: Envelope Address Positions Don't Stay Between Documents

	Article: Q197212
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbenvelope word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you modify the envelope delivery or return address by changing the From Left
	or From Top settings in the Envelope Options dialog box, the change you make is
	not retained between documents.
	
	To locate the From Left and From Top settings, click Envelopes And Labels on the
	Tools menu, select the Envelopes tab, and then click Options.
	
	RESOLUTION
	==========
	
	To make a permanent change to an envelope address position, you must modify the
	Envelope Address or Envelope Return style. To do this, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. In the List box, select All Styles.
	
	3. In the Style box, select Envelope Address (or Envelope Return).
	
	4. Click Modify.
	
	5. To make the change permanent, click the Add To Template check box.
	
	6. Click Format and select Frame from the list that appears.
	
	7. Under Horizontal, change the Position setting to a numeric distance from the
	  margin by typing a number.
	
	  For example, if you want your delivery address to be positioned 1 inch to the
	  right of the margin, type "1.0" (without the quotation marks) in the
	  Horizontal Position box.
	
	8. Under Vertical, change the Position setting to a numeric distance from the
	  top margin by typing in a number.
	
	  For example, if you want the delivery position to be positioned 3 inches down
	  from the top margin, type "3.0" (without the quotation marks) in the Vertical
	  Position box.
	
	9. Click OK twice, and then click Close to close the dialog boxes.
	
	If you now click Envelopes And Labels on the Tools menu and click Options, the
	From Top and From Left settings will be the settings that you specified.
	
	By following these steps, you are applying a frame to the delivery or return
	address. Modifying the style by applying only indents to the style does not
	allow your changes to be retained between documents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbenvelope word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
