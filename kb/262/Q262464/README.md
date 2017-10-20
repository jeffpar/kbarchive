---
layout: page
title: "Q262464: WD97: File Size Increases with EMF, PNG, GIF, or JPEG Graphics"
permalink: /kb/262/Q262464/
---

## Q262464: WD97: File Size Increases with EMF, PNG, GIF, or JPEG Graphics

{% raw %}

	Article: Q262464
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you save a Word document containing an EMF, PNG, GIF, or JPEG graphic as a
	different file format (for example, "Word 6.0/95 (*.doc)" or "Rich Text Format
	(*.rtf)"), the file size of the document may dramatically increase.
	
	For example, a Word 97 document containing a JPEG graphic saved as Word 97 (Word
	Document) may have a file size of 45,568 bytes (44.5KB). However, when you save
	this file as "Word 6.0/95 (*.doc)" or "Rich Text Format (*.rtf)", the file size
	may grow to 1,289,728 bytes (1.22MB).
	
	CAUSE
	=====
	
	This functionality is by design in Microsoft Word 97. If an EMF, PNG, GIF, or
	JPEG graphic is inserted into a Word document, when the document is saved, two
	copies of the graphic are saved in the document. Graphics are saved in the
	applicable EMF, PNG, GIF, or JPEG format and are also converted to WMF (Windows
	Metafile) format.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To prevent Word from saving two copies of the graphic in the document, and to
	reduce the file size of the document, add the ExportPictureWithMetafile=0 string
	value to the Windows registry using the following steps:
	
	1. Quit Word and all Microsoft Office programs.
	
	2. On the Windows Start menu, click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks) and click OK.
	
	4. Go to and select the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	  NOTE: To access the Options registry key, you need to expand the various
	  folders by either double-clicking each folder or clicking the plus sign (+)
	  to the left of the folders.
	
	5. With the Options folder (key) selected, point to New on the Edit menu and
	  click String Value.
	
	6. Type "ExportPictureWithMetafile" (without the quotation marks) and press
	  ENTER.
	
	  NOTE: There are no spaces in the string value name.
	
	7. With the string value ExportPictureWithMetafile selected, click Modify on the
	  Edit menu.
	
	8. In the "Value data" box, type "0" (without the quotation marks).
	
	  NOTE: Type a zero for the "Value data".
	
	9. Click OK.
	
	10. On the Registry menu, click Exit.
	
	Now, when you save a Word document containing an EMF, PNG, GIF, or JPEG graphic
	in a different format (for example, "Word 6.0/95 (*.doc)" or "Rich Text Format
	(*.rtf)"), Word does not retain two copies of the graphic and does not
	dramatically increase the file size of the document as compared to the Word 97
	version of the file.
	
	Additional query words: filesize increase
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
