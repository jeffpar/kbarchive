---
layout: page
title: "Q238284: HOWTO: Display Err Msgs from Server When Using Remote Scripting"
permalink: kb/238/Q238284/
---

## Q238284: HOWTO: Display Err Msgs from Server When Using Remote Scripting

	Article: Q238284
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbASP kbScript kbGrpDSASP kbDSupport kbiis400
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have an HTML page that uses Remote Scripting, and you encounter an error
	that occurred on the server, a dialog box appears with the following message:
	
	  Remote Scripting Error
	  REMOTE SCRIPTING ERROR: Page Invoked does not support Remote Scripting.
	
	Unfortunately, this error message does not provide any useful information about
	how to resolve the issue. This article demonstrates how you can use the data and
	status properties of the object that is returned to display the error that is
	returned from the server.
	
	The status property of the Remote Scripting object will tell us whether we
	encountered an error (0 = no error), and the data property will return the
	contents of that error.
	
	In addition, you must consider that server errors from Microsoft Internet
	Information Server (IIS) are formatted as HTML. As a result, the data property
	contains the HTML that is returned instead of formatted text. This can make the
	error text difficult to read. This article also demonstrates how to place the
	content of the data property into a browser window (by using window.open and
	document.write) so that the error results appear formatted.
	
	NOTE: If your Web server is Windows 2000, you must perform the steps in the
	following article for your server-side error to be returned:
	
	  Q259649 PRB: The Data Property of a Remote Scripting Object Is Empty with IIS
	  5.0 Server
	
	MORE INFORMATION
	================
	
	To create the sample, follow these steps: IMPORTANT: These steps assume that you
	have remote scripting installed in the _ScriptLibrary subfolder of your Web.
	
	1. Create an Active Server Pages (ASP) page named Sample_server.asp in your Web,
	  and paste the following code:
	
	  <%@ LANGUAGE=VBSCRIPT %>
	  <!--#include file="_ScriptLibrary/rs.asp"-->
	  <% RSDispatch %>
	  <SCRIPT Language=JavaScript RUNAT=SERVER>
	  	function Description()
	  	{ 
	  		this.myFunction = myFunction;
	  	}
	  	public_description = new Description();
	
	  	function myFunction()
	  	{
	  	    ForceError();   //This will force a server-side error
	  	}
	
	  </SCRIPT>
	
	2. Create an HTML page in your Web named Sample_client.htm, and paste the
	  following code:
	
	  <HTML>
	  <BODY>
	  <SCRIPT Language="JavaScript" src="_ScriptLibrary/rs.htm"></SCRIPT>
	  <h2>Sample Remote Scripting Client</h2>
	
	  <SCRIPT LANGUAGE="javascript">
	  	RSEnableRemoteScripting();
	
	  	var serverURL = "sample_server.asp";
	  	function myTest()
	  	{
	  		var RSObj = RSExecute(serverURL, "myFunction");
	  		
	  		if (RSObj.status != 0) { WriteError(RSObj.data); }
	  	} 
	
	  	function WriteError(strHTML) {
	  	  var w = window.open("","error_window","width=500,height=300,toolbar=no,location=no,directories=no,status=no,menubar=no")
	  	  w.document.write("<HTML>");
	  	  w.document.write("<BODY>");
	  	  w.document.write("<CENTER>");
	  	  w.document.write("<H2>Remote Scripting Call Returned the following:</H2>");
	  	  w.document.write("<TABLE border=1 cellpadding=10 bgcolor=#dddddd><TR><TD>");
	  	  w.document.write(strHTML)
	  	  w.document.write("</TD></TR></TABLE>");
	  	  w.document.write("<FORM><INPUT type=button value=\" OK \" onclick=self.close()></FORM>");
	  	  w.document.write("</CENTER>");
	  	  w.document.write("</BODY>");
	  	  w.document.write("</HTML>");
	  	}
	  </SCRIPT>
	  <form>
	  <input type=button name=rstest value=" Go " onclick="myTest()">
	  </form>
	  </BODY>
	  </HTML>
	
	3. Open Sample_client.htm in your browser (by using HTTP://), and then click Go.
	  The error occurs and a new window will be written that shows the formatted
	  HTML.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbScript kbGrpDSASP kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
