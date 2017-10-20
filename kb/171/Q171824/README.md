---
layout: page
title: "Q171824: FIX: Crash in INET Control Downloading Page Multiple Times"
permalink: /kb/171/Q171824/
---

## Q171824: FIX: Crash in INET Control Downloading Page Multiple Times

{% raw %}

	Article: Q171824
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Transfer Control crashes if you call the Execute method that causes
	the GetChunk function to be called repeatedly.
	
	This problem only occurs with the Execute method when GetChunk is called
	repeatedly, asking for small buffers (for instance, 1K), until the total
	download is retrieved. If GetChunk is called only once and asks for a very large
	buffer (for instance, 100K), the problem disappears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual Basic or, if Visual Basic is already running, choose New Project
	  from the File menu (ALT, F, N). Form1 is created by default.
	
	2. Place an Internet Transfer Control (Inet1) on Form1 and add the following
	  code:
	
	       Private Sub Inet1_StateChanged(ByVal State As Integer)
	          Dim strMess As String ' Message variable.
	          Select Case State
	          ' ... Other cases not shown.
	
	          Case icResponseCompleted ' 12
	              Dim vtData As Variant ' Data variable.
	              Dim strData As String: strData = ""
	              Dim bDone As Boolean: bDone = False
	
	              ' Get first chunk.
	              vtData = Inet1.GetChunk(1024, icString)
	
	              Do While Not bDone
	                  strData = Data & vtData
	                  ' Get next chunk.
	                  vtData = Inet1.GetChunk(1024, icString)
	                  If Len(vtData) = 0 Then
	                      bDone = True
	                  End If
	              Loop
	
	              txtdata.Text = strData
	
	        End Sub
	    
	
	3. Place a CommandButton (Command1) on Form1, and add the following code:
	
	        Private Sub Command4_Click()
	           Inet1.Execute "ftp://Tony's Server", "dir"
	        End Sub
	    
	
	4. From the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Press the Command1 button multiple time to see the crash.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
