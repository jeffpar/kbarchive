---
layout: page
title: "Q163025: PRB: OLE Error when Inserting OLE Object in VFP for Macintosh"
permalink: kb/163/Q163025/
---

## Q163025: PRB: OLE Error when Inserting OLE Object in VFP for Macintosh

	Article: Q163025
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inserting an OLE object into a general field, adding an insertable OLE
	object in a container control on a form, or assigning an object name to the
	DocumentFile property of an OLE container control in program code, the following
	error message may appear:
	
	  OLE error code 0x80000008: Unspecified error.
	
	CAUSE
	=====
	
	The object inserted into the general field, or added as an insertable object in
	an OLE container on a form, or assigned to the DocumentFile property, has File
	and Creator types that are not associated with an application on the Macintosh.
	
	RESOLUTION
	==========
	
	There are several workarounds to this error:
	
	- Open the file/graphic in an existing application on the Macintosh, then copy
	  and paste the text/graphic into the general field.
	
	- Use a resource editor such as Apple's ResEdit to change the File and Creator
	  type to the types required by the application server.
	
	- Use the Foxtools.cfm function FxSetType() to set the File and Creator type of
	  the file to types associated with an application installed on the Macintosh.
	
	For more information on using the FxSetType() function with an Imager File,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q152370 How To Use the APPEND GENERAL Command with an Imager File
	
	  Q109482 How To Change the Creator and Type Set by FCREATE()
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	On the Macintosh, all files are associated to an application by either the File
	or Creator type. A file's Creator and Type attributes identify the parent
	application of a file and its specific kind. The Type attribute is used by other
	applications in order to determine whether a file is a valid document to load.
	Whereas in Windows, files are generally associated to applications by their file
	extension.
	
	Steps to Reproduce Behavior
	---------------------------
	
	This error message can be produced in the following three methods.
	
	Method 1:
	
	Attempt to assign a file to the DocumentFile property in code when creating an
	OLE object using the CREATEOBJECT() function.
	
	NOTE: By default, the "Picts folder" and the graphics do not exist. Visual FoxPro
	ships with sample graphics files that are contained in a self- extracting
	archive (SEA) file located in the "Microsoft Visual FoxPro:Samples:Graphics"
	folder. To follow the steps below, double-click the Picts.sea to extract the
	PICT files. Store them in the default folder specified "Picts Folder." For more
	information of these SEA files, read the Graphics Readme in the above folder.
	
	     * The file and creator types used below are specific to Microsoft Imager
	     * Uncomment the next three lines of code to prevent OLE error
	     * mypict= HOME()+"Samples:Graphics:Picts Folder:Fox:Add.PICT"
	     * SET LIBRARY TO HOME() + "Foxtools.cfm" ADDITIVE
	     * =FxSetType(SYS(2027,mypict ),"PICT","MIMG")
	
	     frmMyForm = CREATEOBJECT('form')  && Create a form
	     frmMyForm.Closable = .F.  && Disable the close box
	     frmMyForm.AddObject('cmdCommand1','cmdMyCmdBtn')  && Add Command button
	     frmMyForm.AddObject("oleObject","oleImager")      && Add OLE object
	     frmMyForm.cmdCommand1.Visible=.T.   && Display the "Quit" Command button
	     frmMyForm.oleObject.Visible=.T.     && Display the OLE control
	     frmMyForm.oleObject.Height = 50     && OLE control height
	     frmMyForm.oleObject.AutoActivate = 2
	     frmMyForm.Show  && Display the form
	     frmMyForm.oleObject.DoVerb(0)       && 0 for Default, -1 for Edit
	
	     READ EVENTS  && Start event processing
	     CLEAR CLASS oleImager
	
	     DEFINE CLASS oleImager as OLEControl
	        OleClass ="MSImager.2"  && Server name
	        * Uncomment next line, comment 2nd DocumentFile to prevent error
	        * DocumentFile = mypict
	        DocumentFile = HOME()+"Samples:Graphics:Picts Folder:Fox:Add.PICT"
	     ENDDEFINE
	
	     DEFINE CLASS cmdMyCmdBtn AS CommandButton  && Create Command button
	        Caption = '\<Quit'  && Caption on the Command button
	        Cancel = .T.  && Default Cancel Command button (Esc)
	        Left = 125    && Command button column
	        Top = 210     && Command button row
	        Height = 25   && Command button height
	
	        PROCEDURE Click
	           CLEAR EVENTS  && Stop event processing, close form
	        ENDPROC
	     ENDDEFINE
	
	Method 2:
	
	Attempt to insert an OLE object into an OLE container on a form:
	
	1. Create a new form.
	
	2. From the Form Controls toolbar, select the OLE Container Control button and
	  click somewhere on the form.
	
	3. In the Object Type dialog box, choose Microsoft Imager 2.0 Picture. Then
	  choose the 'From File' option button under the Create label.
	
	4. Then select Add.PICT from the following folder:
	
	     MACINTOSH HD:VFP:Samples:Graphics:Picts Folder:Fox
	
	Method 3:
	
	Directly insert the OLE object into the general field of the table.
	
	1. Create a table with a general field.
	
	2. Browse the table and double-click on the general field to open the general
	  field window.
	
	3. Choose the Insert Object command on the Edit menu.
	
	4. In the Object Type dialog box, choose Microsoft Imager 2.0 Picture. Then
	  choose the 'From File' option button under the Create label.
	
	5. Then select Add.PICT from the following folder:
	
	     MACINTOSH HD:VFP:Samples:Graphics:Picts Folder:Fox
	
	The task in Method 3 can also be accomplished by using the APPEND GENERAL
	command. For more information on using the APPEND GENERAL command with OLE
	objects, please see the following articles in the Microsoft Knowledge Base:
	
	  Q152370 How To Use the APPEND GENERAL Command with an Imager File
	
	  Q137295 How To Convert Memo Fields into Embedded Word Documents
	
	NOTE: If error messages are received regarding problems with OLE functionality,
	please refer to the following articles in the Microsoft Knowledge Base:
	
	  Q151636 Insert Object of an Imager File Causes Error or Hangs Mac
	
	  Q141099 MXL5 Err Msg: "Cannot Start the Source Application"
	
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Dean Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
