---
layout: page
title: "Q157088: WD97: Limitations Converting Documents from Word 97 to 6.x/7.0"
permalink: kb/157/Q157088/
---

## Q157088: WD97: Limitations Converting Documents from Word 97 to 6.x/7.0

	Article: Q157088
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides information about what happens when you convert a
	Microsoft Word 97 document to Word 6.x or Word 7.0 format.
	
	
	MORE INFORMATION
	================
	
	The following table identifies the new features that are supported, not
	supported, or are partially supported.
	
	                      Supported/ 
	  Word 97 feature     Not supported     Comments
	  ------------------------------------------------------------------------
	
	  Embedded fonts      Not supported     Embedded fonts are lost, and Word
	                                        7.x or Word 6.x assigns the
	                                        closest font available.
	
	  Outline and         Not supported     Outline numbered lists and heading
	  heading numbered                      numbered lists are converted to
	  lists                                 regular text but retain their
	                                        appearance.
	
	  Multilevel bullets  Not supported     Multilevel bullets are converted
	                                        to regular text but retain their
	                                        appearance.
	
	  Arrow Styles        Not Supported     Arrow styles for lines are lost.
	
	  Page borders        Not supported     Page borders are not converted.
	
	  Character shading   Not supported     Character shading is lost.
	
	  Character borders   Not supported     Character borders are lost.
	
	  Paragraph borders   Not supported     Paragraph borders and shading are
	                                        lost.
	
	  Animated text       Not supported     Animated text formatting is lost.
	
	  Embossed and        Not supported     Embossed and engraved character
	  engraved                              formatting are lost.
	  characters
	
	  EMF, PNG, and       Supported         Graphics are saved in applicable
	  JPEG graphics                         EMF, PNG, or JPEG format and are
	                                        converted to WMF (Windows
	                                        Metafile) or PICT (Macintosh)
	                                        format. To avoid getting two
	                                        copies of each graphic saved in
	                                        the document, add the option
	                                        ExportPictureWithMetafile=0
	                                        in the registry at the following
	                                        location:
	
	                                        HKEY_CURRENT_USER\Software\                                           Microsoft\Office\8.0\Word\Options
	
	  Grouped Drawing     Partially         Grouped drawing objects become
	  objects             supported         a single box, unable to ungroup
	
	  Floating pictures   Not supported     Floating pictures are converted in
	  with text wrapping                    a frame to WMF (Windows Metafile)
	  around them                           or PICT (Macintosh) format.
	
	  Floating OLE        Not supported     Floating OLE objects are converted
	  objects                               to text boxes.
	
	  Highlighting        Partially         Highlighting is preserved in Word
	                      supported         95 but lost in Word 6.x.
	
	  Vertically merged   Not supported     Merged table cells are exploded
	  table cells                           into unmerged cells.
	
	  Vertically split    Partially         Vertically split cells in a row
	  table cells         supported         are converted to separate rows
	                                        keeping the table uniform.
	
	  Vertically aligned  Not supported     Vertically aligned text is
	  text in table                         reformatted so that the text
	  cells                                 aligns at the top of the cell.
	
	  Vertical text in    Not supported     Vertical text is reformatted as
	  table cells                           horizontal text.
	
	  HYPERLINK field     Partially         The last value of the HYPERLINK
	                      supported         field is retained.
	
	  Tracked changes     Not supported     Tracked changes for document
	  for document                          properties, paragraph numbers,
	  properties,                           and display fields (i.e. EQ
	  paragraph numbers,                    fields) are lost, but other
	  and display fields                    tracked changes are retained.
	  (i.e. EQ or other
	  embedded objects)
	
	  Password            Not supported     All document protection is lost.
	  protection of
	  documents
	
	  Document            Not supported     All document protection is lost.
	  protection for
	  tracked changes,
	  comments, and
	  forms
	
	  New document        Partially         New document properties are
	  properties          supported         preserved in Word 95 but lost in
	  introduced                            Word 6.x.
	  in Word 97
	
	  ActiveX controls    Partially         ActiveX controls can be used but
	  on forms            supported         not modified.
	
	  Unicode characters  Not supported     Result in potential data loss.
	                                        Unicode characters (2 bytes per
	                                        character) are mapped to
	                                        corresponding ANSI (Windows) or
	                                        Macintosh equivalents (1 byte per
	                                        character) or converted to
	                                        question marks (?). Foreign
	                                        language characters are the most
	                                        likely to be affected.
	
	  DOCPROPERTY field   Partially         The DOCPROPERTY field is retained
	                      supported         in Word 95, but only the most
	                                        recent value of the field is
	                                        retained in Word 6.x.
	
	  Visual Basic        Not supported     Macros created in Word 97 Visual
	  macros                                Basic are lost.
	
	Cannot Edit a Word Document Embedded Object in Word 95
	------------------------------------------------------
	
	When you insert a Word document as an embedded object in a document in Word 97,
	save the document in the Word 6.x/95 format or Rich Text Format, and then open
	the document in Word 95, you may receive the error message "Word cannot edit the
	object" when you double-click the object to edit it. This occurs because when
	you save the document created in Word 97 in the Word 6.x/95 format or Rich Text
	Format, the embedded object is not saved as a Word 95 document object. To edit
	the object, you must have Word 97 installed on your computer.
	
	Cannot Edit an Embedded Object Created in a Word 95 Document after Saving in Word 97
	------------------------------------------------------------------------------------
	
	If you create an embedded object in a Word 95 document, open the document in Word
	97, and then save the document in Word 6.x/95 format or Rich Text Format, the
	embedded object is updated to a later version of the OLE object server program
	on the computer running Word 97. If you reopen the document in Word 95 on a
	computer that does not have Word 97 or Office 97 installed, you may not be able
	to edit the object.
	
	This can occur with any OLE object, including objects created in Word 97
	documents. To see a list of OLE server programs installed on your computer, view
	the list in the Object dialog box (Insert Menu).
	
	WordArt Text Effects
	--------------------
	
	For information about converting Word 97 documents that contains WordArt text
	effects to Word 6.x or Word 7.0 for Windows, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q157466 WD: WordArt Object Missing, Changes After Conversion
	
	Additional query words: converting converts converted transferred transferring transfers 6.0/95 binary imitation save down to word6 wordart art word
	
	======================================================================
	Keywords          : kbgraphic winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	
	=============================================================================
	
