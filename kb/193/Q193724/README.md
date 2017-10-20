---
layout: page
title: "Q193724: PRB: Memory Leak Passing Arrays from VBScript to VFP"
permalink: /kb/193/Q193724/
---

## Q193724: PRB: Memory Leak Passing Arrays from VBScript to VFP

{% raw %}

	Article: Q193724
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When passing an array from VBScript code to a Visual FoxPro Component Object
	Model (COM) Server, memory usage increases.
	
	CAUSE
	=====
	
	For every STRING or UNITIALIZED array element, you lose one handle and 8 bytes
	of memory.
	
	RESOLUTION
	==========
	
	The following workaround initializes all elements of the array with numeric data
	or Null before sending it to the COM Server.
	
	  <%@ LANGUAGE=VBScript ENABLESESSIONSTATE=False %>
	  <html>
	  <body>
	  <p><b>This is a test</b></p>
	
	  <%
	  dim myarray(30)
	  for i = 0 to 29
	     myarray(i) = 0 'Or Null
	  next
	
	  set ox = Server.CreateObject("arrayhandler.arrayhandler")
	  response.write ox.myeval("'<br>'+vers(1)+'</br><br> '+time()+" + _
	  "' </br>'")
	  response.write  ox.myeval("'<br>UserMem:'+sys(1016) + '</br>'")
	
	  ox.DoNothingToArray myarray
	
	  set myarray(2) = NOTHING
	  set myarray(0) = NOTHING
	  set myarray(1) = NOTHING
	
	  set ox = NOTHING
	  set zzz = NOTHING
	
	  %>
	  </body>
	  </html>
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In a project named ArrayHandler, add the following code to the Main program:
	
	  DEFINE CLASS arrayhandler AS CUSTOM OLEPUBLIC
	    PROCEDURE DoNothingToArray
	       PARAM myarray
	       EXTERNAL ARRAY myarray
	       RETURN
	    ENDPROC
	    PROC mydocmd(p1)
	        &p1
	    PROC myeval(p1)
	        RETURN EVAL(p1)
	  ENDDEFINE
	
	2. Build that project into a COM .dll file named ArrayHandler.dll.
	
	3. Use the following code in an Active Server Page called ArrayTest.asp:
	
	  <%@ LANGUAGE=VBScript ENABLESESSIONSTATE=False %>
	  <html>
	  <body>
	  <%
	  dim myarray(30)
	  myarray(0) = "blah"
	
	  set ox = Server.CreateObject("arrayhandler.arrayhandler")
	  response.write ox.myeval("'<br>'+vers(1)+'</br><br> '+"+ _
	  "time() + ' </br>'")
	  response.write  ox.myeval("'<br>UserMem:'+sys(1016) + '</br>'")
	
	  ox.DoNothingToArray myarray
	
	  set myarray(2) = NOTHING
	  set myarray(0) = NOTHING
	  set myarray(1) = NOTHING
	
	  set ox = NOTHING
	  set zzz = NOTHING
	
	  %>
	  </body>
	  </html>
	
	4. Place the ArrayHandler.dll on a computer that has Internet Information Server
	  (IIS) and register the COM server.
	
	5. Place the Active Server Page created in Step 3 in the InetPub\WWWRoot
	  directory on the IIS Server.
	
	6. Run the .asp page by typing the following in the Address line of Internet
	  Explorer on the IIS Server and then press ENTER:
	  http://LOCALHOST/ARRAYTEST.ASP
	
	When the page displays, press the F5 key to refresh. Notice the memory increase
	with each refresh.
	
	Additional query words: kbVFp600 kbCOMt kbISAPI kbInternet kbVBScript
	
	======================================================================
	Keywords          : kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
