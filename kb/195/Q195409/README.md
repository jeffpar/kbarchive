---
layout: page
title: "Q195409: HOWTO: Get Full Path of Item Selected in List Box"
permalink: /kb/195/Q195409/
---

## Q195409: HOWTO: Get Full Path of Item Selected in List Box

{% raw %}

	Article: Q195409
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbHWMAC kbOOP kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to obtain the full path of a file chosen in a list box or
	combo box control that has a RowSourceType property set to 7-Files.
	
	MORE INFORMATION
	================
	
	You can use the ListItem property to obtain the path of the file selected. The
	ListItem property is a character string array used to access the items in a
	combo box or list box control by item ID. An item ID of two (2) is the full path
	to the directory for which files are currently being shown in the list box. An
	item ID of one (1) is just the drive.
	
	The following steps create a form to illustrate these concepts:
	
	1. Create a new form.
	
	2. Add a list box and a command button to the form.
	
	3. Set the following properties for the list box:
	
	        RowSourceType=7     (for Files)
	        RowSource=C:\*.*    (to show all files in root of C:\)
	
	4. Place the following code in the Click event of the command button:
	
	        WAIT WINDOW Thisform.list1.Value
	        WAIT WINDOW Thisform.list1.ListItem(2)+Thisform.list1.Value
	
	5. Save and run the form.
	
	6. In the list box, navigate into the directory of your choice and select a
	  file.
	
	7. Click the command button. The first WAIT WINDOW displays the Value property
	  of the list box. The second WAIT WINDOW displays the ListItem(2) value of the
	  list box concatenated with the Value property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbHWMAC kbOOP kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
