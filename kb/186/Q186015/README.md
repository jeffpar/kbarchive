---
layout: page
title: "Q186015: HOWTO: Pass Parameters to an ActiveDoc"
permalink: /kb/186/Q186015/
---

## Q186015: HOWTO: Pass Parameters to an ActiveDoc

{% raw %}

	Article: Q186015
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can pass an argument to an Active Document application in one of two ways,
	depending on how the application runs:
	
	- Hosted in the Internet Browser.
	
	  -or-
	
	- In Visual FoxPro or Visual FoxPro run-time.
	
	MORE INFORMATION
	================
	
	Hosted By Internet Explorer
	---------------------------
	
	When the Active Document application is hosted in an Internet browser, any
	arguments specified are sent directly to the Run event of the ActiveDoc class.
	The following line of code is included as the first line in the Run event by
	default:
	
	     LPARAMETERS cHyperLinkTarget
	
	The Run event can only receive one parameter. However, you may parse this one
	parameter into multiple parameters once received by the Run event. Multiple
	parameters may be strung together with a delimiter such as a plus sign. The
	developer needs to code the application to look for the delimiter character when
	parsing out multiple parameters.
	
	Passing an argument to an Active Document application uses the following syntax:
	
	     HTTP://MYIIS/MyADoc.app#MyParamVal
	
	Everything, starting with and including the pound sign passes into the Run event
	as a parameter. Therefore, you need to remove the pound sign from the
	parameter.
	
	Parameters can only pass to an Active Document application that is hosted in a
	Web browser if the Active Document application is being served by a Web server
	such as Microsoft Internet Information Server. A parameter cannot pass to an
	Active Document application that runs in the browser with the Run Active
	Document command from Visual FoxPro's Tools menu. Nor can a parameter pass to an
	Active Document application if you type the location directly into the Web
	browser's address bar. For instance, you can run an Active Document application
	by typing the following into Microsoft Internet Explorer's address bar, but you
	cannot pass any parameters:
	
	  
	
	  C:\TEST\MyADoc.app
	
	In Visual FoxPro
	----------------
	
	When the Active Document is hosted in Visual FoxPro or the Visual FoxPro
	run-time, the arguments pass to the Init event of the ActiveDoc class. The
	syntax to run an Active Document application in the Visual FoxPro development
	environment is as follows:
	
	     DO MyADoc.app WITH cMyParamVal
	
	MyADoc.app is the name of the Active Document application, and cMyParamVal is the
	value of the parameter.
	
	Parameters cannot pass to the Active Document application if you run the
	application from the Run Active Document command on the Tools menu, whether it
	is hosted in Visual FoxPro or not.
	
	Tips For Coding The ActiveDoc Class
	-----------------------------------
	
	Since there is a difference in where these parameters are being received, some
	tips to help avoid problems when creating an Active Document application that
	utilizes parameters are described below:
	
	- Use custom properties in the ActiveDoc class to store the parameter values.
	  If you are passing the parameters to the form called in the Run event, when
	  the application is run through the Visual FoxPro shell, you reduce the code
	  needed to reference the parameter.
	
	  You create Custom properties by selecting New Property from the Class menu
	  when in the Visual Class Designer or in the Edit Property/Method dialog box
	  also accessed from the Class menu.
	
	- Use the ISHOSTED() and GETHOST() functions to determine if the Active
	  Document application is being run in FoxPro or hosted in Internet Explorer.
	
	  ISHOSTED( ) returns true (.T.) if an Active Document is hosted in an Active
	  Document container such as Microsoft Internet Explorer.
	
	  GETHOST() returns an object reference to the container of an Active Document.
	  You can then use the name property to determine the name of the container.
	
	- Creating ActiveDoc classes can only take place in the Visual Class Designer.
	  You cannot create an ActiveDoc class with program code.
	
	- The following are sample Init and Run events from an ActiveDoc class that use
	  Parameters. This.one and This.two are custom properties of the ActiveDoc
	  class. The Run event code below is expecting two parameters, separated by a
	  plus sign.
	
	  Sample Code
	  -----------
	
	     PROCEDURE Init
	        PARAMETERS one,two
	        This.one=one
	        This.two=two
	     ENDPROC
	
	     PROCEDURE Run
	        LPARAMETERS cHyperLinkTarget
	        IF ISHOSTED() THEN
	           MyHost=GETHOST()
	           IF MyHost.Name='Microsoft Internet Explorer' THEN
	              This.one= ;
	                 SUBSTR(cHyperLinkTarget,2,AT('+',cHyperLinktarget)-2)
	              This.two=SUBSTR(cHyperLinkTarget,AT('+',chyperlinktarget)+1)
	           ENDIF
	        ENDIF
	        DO FORM test1 WITH This.one,This.two
	        READ EVENTS
	        ENDPROC
	
	REFERENCES
	==========
	
	Visual FoxPro "Programmer's Guide," 6.0, Chapter 31 - Interoperability and the
	Internet Visual FoxPro Help, version 6.0, search on: "ISHOSTED()"; "GETHOST()"
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
