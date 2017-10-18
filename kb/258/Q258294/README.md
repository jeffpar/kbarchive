---
layout: page
title: "Q258294: HOWTO: Offload XSL Transformations to Clients' Browsers"
permalink: kb/258/Q258294/
---

## Q258294: HOWTO: Offload XSL Transformations to Clients' Browsers

	Article: Q258294
	Product(s): Internet Information Server
	Version(s): winnt:; :2.0,2.5,2.6,3.0,3.0 SP1,4.0
	Operating System(s): 
	Keyword(s): kbInternet kbie500 kbXML kbGrpDSMDAC kbDSupport kbIIS kbie501 kbMSXML200
	Last Modified: 12-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 
	- Microsoft XML, versions 2.0, 2.5, 2.6, 3.0, 3.0 SP1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to offload XSL processing from the server to the client. Doing so
	distributes the load, which helps to relieve the server from having to process
	the formatting of an XML document.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to load an XSL and XML document into the
	clients' memory and then it uses the XSL to transform the XML.
	
	1. First, copy the following code into a file named Sample.htm, and then save
	  the file to a WebServer in a location accessible from the Web:
	
	  <HTML>
	  <HEAD>
	  <TITLE>Clientside XSL Processing Sample</TITLE>
	  <SCRIPT LANGUAGE="VBScript">
	  	dim xslDoc, xmlDoc
	
	  Use the Version dependent PROGID 'MSXML2.DOMDocument.4.0 if you wish to use the DOMDocument object that ships with MSXML 4.0.	
	
	  	Sub Init()
	  		set xslDoc = CreateObject("Microsoft.XMLDOM")
	  		set xmlDoc = CreateObject("Microsoft.XMLDOM")
	  		xslDoc.Async = False
	  		xmlDoc.Async = False
	  		xslDoc.Load "http://<YourServerName>/Sample.xsl"
	  		xmlDoc.Load "http://<YourServerName>/Sample.xml"
	  		Data.innerHTML = xmlDoc.transformNode(xslDoc)	
	  	End Sub
	  </SCRIPT>
	  </HEAD>
	  <BODY ONLOAD="Init">
	  <CENTER><H1>Clientside XSL Processing Sample</H1></CENTER>
	  <DIV ID="Data">
	  </DIV>
	  </BODY>
	  </HTML>
	
	2. Modify the page so that the address of the Sample.xml and Sample.xsl files is
	  the same as the location of your server.
	
	3. Insert the following XML code into a blank XML document and save it to the
	  same location as the Sample.xml file:
	
	  <?xml version="1.0"?>
	  <CUSTOMERS>
	     <CUSTOMER>
	        <CustomerID>
	           ALFKI
	        </CustomerID>
	        <CompanyName>
	           Alfreds Futterkiste
	        </CompanyName>
	        <ContactName>
	           Maria Anderson
	        </ContactName>
	        <Country>
	           Germany
	        </Country>
	     </CUSTOMER>
	     <CUSTOMER>
	        <CustomerID>
	           ANATR
	        </CustomerID>
	        <CompanyName>
	           Ana Trujillo Emparedados y helados
	        </CompanyName>
	        <ContactName>
	           Ana Trujillo
	        </ContactName>
	        <Country>
	           Mexico
	        </Country>
	     </CUSTOMER>
	  </CUSTOMERS>
	
	4. If using an MSXML version earlier than 3.0, then insert the following XSL
	  code into a blank XSL document and save it to the same location as the
	  Sample.xsl file.
	
	  <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
	     <xsl:template match="/Books"> 
	             <HTML>
	             <BODY>
	             <TABLE BORDER="2">
	               <TR>
	                 <TD>Title</TD>
	                 <TD>Author</TD>
	               </TR>
	               <xsl:for-each select="Book">
	                 <TR>
	                   <TD><xsl:value-of select="Title"/></TD>
	                   <TD><xsl:value-of select="Author"/></TD>
	                 </TR>
	               </xsl:for-each>
	             </TABLE>     
	             </BODY>
	       </HTML>    
	       </xsl:template>     
	     </xsl:stylesheet>
	
	5. Browse to the Sample.htm page.
	
	This page loads into the browser, and then downloads the data for the XML and XSL
	pages. It then uses the XSL document to transform the XML document into HTML. It
	displays this output on the page by using the innerHTML property of the DIV tag
	on the HTML page.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbie500 kbXML kbGrpDSMDAC kbDSupport kbIIS kbie501 kbMSXML200 
	Technology        : kbiisSearch kbAudDeveloper kbMSXMLSearch kbMSXML200 kbMSXML250 kbMSXML260 kbMSXML300 kbMSXML300SP1 kbMSXML400
	Version           : winnt:; :2.0,2.5,2.6,3.0,3.0 SP1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
