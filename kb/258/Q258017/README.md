---
layout: page
title: "Q258017: FIX: FieldChangeComplete Not Fired When UserControl Loses Focus"
permalink: /kb/258/Q258017/
---

## Q258017: FIX: FieldChangeComplete Not Fired When UserControl Loses Focus

{% raw %}

	Article: Q258017
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS6
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a UserControl control that contains another usercontrol and a TextBox
	control, which is bound to a Field object of an ADO Recordset object, the
	FieldChangeComplete event of the ADO RecordSet object is not fired after the
	TextBox control has a change and loses its focus to the contained usercontrol by
	mouse-clicking.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX control project. UserControl1 is added by default.
	
	2. Change the name of UserControl1 to "MyControl" (without the quotation marks).
	
	3. Place a Label on MyControl and change its caption to MyControl.
	
	4. Size MyControl so that it is nearly the same as Label.
	
	5. Close the MyControl window.
	
	6. From the File menu, choose Add Project. Project2 is added with Form1 by
	  default.
	
	7. Right-click on Project2 and then click on Set as Start up.
	
	8. From the Project menu, choose References, and then add references by checking
	  the following items for Project2:
	
	   - Microsoft ActiveX Data Objects 2.1 Library
	
	   - Microsoft Data Binding Collection
	
	   - Microsoft Data Source Interfaces
	
	9. From the Project menu, choose Add User Control. UserControl1 is added by
	  default.
	
	10. Place two TextBox controls, one MyControl and one Label on UserControl1.
	  Make the TextBox controls relatively long.
	
	11. Paste the following code into UserControl1's code window:
	
	  Private colBndNwind As New BindingCollection
	  Private WithEvents rs As ADODB.Recordset
	
	  Public Sub Init()
	  Set rs = New ADODB.Recordset
	      With rs
	          .Fields.Append "Text", adChar, 20
	          .Open
	          .AddNew
	          .Fields.Item("Text") = "Text"
	     End With
	     
	     ' Set the DataSource of the Bindings collection to the recordset.
	     Set colBndNwind.DataSource = rs
	     
	     ' Add to the Bindings collection.
	      With colBndNwind
	          .Add Text1, "Text", "Text"
	      End With
	      Text2.ForeColor = 255
	  End Sub
	
	  ' Called after the value of Field objects has changed.
	  Private Sub rs_FieldChangeComplete(ByVal cFields As Long, ByVal Fields As
	  Variant, ByVal pError As ADODB.Error, adStatus As ADODB.EventStatusEnum,
	  ByVal pRecordset As ADODB.Recordset)
	    Text2.Text = "FieldChangeComplete: " & Fields(0).Name & " = " & Fields(0).Value
	  End Sub
	
	12. Close the UserControl1 window.
	
	13. Place one UserControl1 on Form1.
	
	14. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	    UserControl11.Init
	  End Sub
	
	15. Press the F5 key to run the program.
	
	16. Click on the TextBox that has Text, and type "Hello" (without the quotation
	  marks). Click on MYCONTROL, and note that the FieldChangeComplete event is
	  not fired because the other TextBox's text has no change.
	
	17. Click on the TextBox again and type "Hey" (without the quotation marks).
	  Click on Label1, and note that the FieldChangeComplete event is fired
	  because the other TextBox is changed.
	
	18. Click on the TextBox again and type "Hi" (without the quotation marks).
	  Press the TAB key, and note that the FieldChangeComplete event is fired
	  because the other TextBox is changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
