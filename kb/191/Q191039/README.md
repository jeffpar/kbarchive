---
layout: page
title: "Q191039: HOWTO: Build an Internet Information Server Application"
permalink: /kb/191/Q191039/
---

## Q191039: HOWTO: Build an Internet Information Server Application

{% raw %}

	Article: Q191039
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbCodeSnippet
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to build a Microsoft Internet Information Server
	(IIS) application in Visual Basic.
	
	MORE INFORMATION
	================
	
	Steps to Build a Simple IIS Application
	---------------------------------------
	
	1. Start Visual Basic. In the New Project dialog box, select IIS Application,
	  and then click Open.
	
	2. In the Project Explorer, select Project1 (Project1). In the Properties
	  window, modify the Name property to give your project a name. On the File
	  menu, click Save Project.
	
	  NOTE: You cannot continue to the next steps to import an HTML file until you
	  save the project.
	
	3. In the Project Explorer, click to expand the Designers folder. Right-click
	  WebClass1 (WebClass1.Dsr), and click View Object on the shortcut menu. The
	  WebClass designer window appears.
	
	4. Right-click the HTML Template WebItems folder, and click Add HTML Template to
	  add an HTML file to your project. By default, this HTML Template WebItem is
	  called Template1 in the WebClass designer window.
	
	  NOTE: If the xxx.htm file that you select is in your project's working
	  directory, the WebClass designer makes a copy of the xxx.htm file (named
	  xxx1.htm) and places it in the working directory of your project. xxx1.htm is
	  the HTML file that the WebClass designer makes changes to. If the xxx.htm
	  file that you select is not in the working directory of your project, the
	  WebClass designer places a copy of the file (with the same name) in the
	  working directory of your project.
	
	5. In the Project Explorer, right-click WebClass1 (WebClass1.Dsr), and click
	  View Code on the shortcut menu. Replace the WebClass Start event code with
	  the following code:
	
	        Private Sub WebClass_Start()
	           Set NextItem = Template1
	        end Sub
	
	  You use the NextItem property to shift processing from one WebItem to another
	  during a single request. This causes the Template1_Respond event to fire.
	
	6. Paste the following code in the Template1_Respond event:
	
	        Private Sub Template1_Respond()
	            Template1.WriteTemplate
	        End Sub
	
	  The WriteTemplate method sends the contents of Template1 to a client browser
	  window. (Template1 is the HTML file that you imported into the IIS
	  application.) If you do not put anything in this event, and you run the
	  project, the browser displays a blank page.
	
	7. Press the F5 key to run the project. The Project Properties dialog box
	  appears in Visual Basic. On the Debugging tab, make sure that Start component
	  is set to WebClass1, and then click OK. The WebClass designer prompts you to
	  create a Virtual Root, which is required in order to run the WebClass. After
	  you enter a name for the Virtual Root, click OK.
	
	8. The page that you created now appears in the browser. After you browse the
	  project, click End on the Run menu in Visual Basic. In the Project Explorer,
	  right-click WebClass1 (WebClass1.Dsr), and then click View Code on the
	  shortcut menu. Replace the Template1_Respond event code with the following
	  code to create a second example:
	
	     Private Sub Template1_Respond()
	     'Write a reply to the user.
	       With Response
	          .Write "<html>"
	          .Write "<body>"
	          .Write "<h1>WebClass1's Starting Page</h1>"
	          .Write "<p>Response was created in the Template1_Respond event</p>"
	          .Write "</body>"
	          .Write "</html>"
	      End With
	     End Sub
	
	9. Press the F5 key to run the project. After you browse the project, click End
	  on the Run menu in Visual Basic.
	
	10. On the Project menu in Visual Basic, click <Project Name> Properties.
	  On the General tab, select the following project properties check boxes for
	  optimal performance:
	
	   - Retain In Memory
	   - Unattended Execution
	   - Apartment Threaded for the Threading Model
	
	For additional information on these settings and other possible issues, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q186273 BUG: AV Running VB-Built Component in Multi-Threaded Environment
	
	REFERENCES
	==========
	
	For additional information on IIS Applications, see the following Microsoft
	Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/devprods/vs6/vbasic/vbcon98/vbcondevelopingiisapplications.htm
	
	For additional information on WebClasses, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q189538 BUG: Need to Remove the "Me" References from WcDemo Sample
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q189540 PRB: Access Denied Error on WebClass Files
	
	  Q190252 HOWTO: Change the External HTML Editor
	
	  Q190253 INFO: VB6 Designers Do Not Work in VB5
	
	  Q191035 BUG: Changes to WebClass Templates Not Always Detected
	
	  Q191038 INFO: WebClass Initialize, BeginRequest, Terminate Events
	
	  Q191119 FIX: VB Classes Can Cause IIS to Have Access Violations
	
	  Q191125 BUG: Error Logging Could Have Problems in WebClass Designers
	
	  Q191187 PRB: Do Not Modify ASP File That Is Created by the WebClass Designer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
