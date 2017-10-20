---
layout: page
title: "Q80912: FIX: Graph Custom Control Incompatible w/ HP II Series Printer"
permalink: /kb/080/Q80912/
---

## Q80912: FIX: Graph Custom Control Incompatible w/ HP II Series Printer

{% raw %}

	Article: Q80912
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	- Microsoft Professional Toolkit for Microsoft Visual Basic programming system for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Basic Graph custom control cannot successfully print directly to a
	Hewlett-Packard (HP) II series LaserJet. This is a compatibility issue between
	the Graph custom control and the HP II series only. It is not a problem with
	Visual Basic.
	
	WORKAROUND
	==========
	
	To work around the problem, add an additional form to the project, transfer the
	graph's image to the form, and then print the form. This method bypasses the
	DrawMode=5 (print) method and the incompatibility issue. The example in the More
	Information section demonstrates how how to implement this workaround.
	
	NOTE: Unless you know that your graph will never be printed on an HP II Series
	LaserJet, you may wish to always use this print method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Graph custom control supplied
	with the products listed above. This bug was corrected in Microsoft Visual Basic
	version 3.0 for Windows.
	
	MORE INFORMATION
	================
	
	The Visual Basic Graph custom control version 1.2 allows you to send a graph
	image directly to your printer by setting the graph's DrawMode property to 5
	(print). However, the Graph control is incompatible with the HP II LaserJet
	family. When using the DrawMode=5 (print) method to print to an HP II LaserJet,
	only a portion of the graph will print.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose Add File, and select the GRAPH.VBX custom control
	  file. The Graph tool will appear in the Toolbox.
	
	3. Add another form (Form2).
	
	4. Change the following properties for Form2:
	
	  Property     Value
	  ------------------
	
	  ControlBox   False
	  MaxButton    False
	  MinButton    False
	  Caption      False
	
	5. On Form1, create a Graph control (Graph1) and a command button (Command1).
	  Set the Caption property for Command1 to "Print."
	
	6. Size and edit Graph1 so that it appears the way you want it to print.
	
	7. Add the following code to the Command1_Click event:
	
	     Sub Command1_Click ()
	
	        'change to black/white for clearer printing
	        Graph1.DrawStyle = 0
	        'update change to black/white
	        Graph1.DrawMode = 2
	
	        Load Form2
	        'size Form2 and transfer Graph1's image
	        Form2.width = Graph1.width
	        Form2.height = Graph1.height
	        Form2.picture = Graph1.picture
	        Form2.visible = 1   'optional
	
	        Form2.PrintForm
	
	        'return Graph1 to display in color (optional)
	        Graph1.DrawStyle = 1
	        'update display to color
	        Graph1.DrawMode = 2
	
	     End Sub
	
	8. From the Run menu, choose Start (ALT R, S) and click the Print button.
	
	Unless you specify otherwise, Graph1 will originally be displayed in color. Once
	the Command1_Click event is triggered, the graph will convert to black and
	white. If you exclude the optional line Form2.visible=1, a dialog box will
	appear stating that Form2 is being printed. Graph1 will convert back to a color
	display, and the program will end.
	
	If you included the optional line Form2.visible=1, you will see Form2 appear and
	resize with the black and white graph image as its picture. A dialog box will
	appear stating that Form2 is being printed. Graph1 will convert back to a color
	display and the program will end.
	
	Additional query words: buglist1.00 buglist2.00 fixlist3.00 1.00 2.00 3.00 H-P HPII
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
