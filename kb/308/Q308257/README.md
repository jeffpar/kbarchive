---
layout: page
title: "Q308257: OLEDB: Complex SELECT Statements Including FROM Clause Fail"
permalink: kb/308/Q308257/
---

## Q308257: OLEDB: Complex SELECT Statements Including FROM Clause Fail

	Article: Q308257
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Complex SELECT statements that include FROM clauses may fail to complete
	successfully when you use the OLE DB Provider for DB2 that is included with Host
	Integration Server 2000. The exact result of such a SELECT statement varies
	depending on the syntax of the SELECT statement.
	
	CAUSE
	=====
	
	The OLE DB Provider for DB2 SQL parser does not correctly handle the FROM clause
	syntax. In addition, joined and derived tables are not supported by the OLE DB
	Provider for DB2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The following two code examples are of SELECT statements that fail to execute
	when you use the OLE DB Provider for DB2:
	
	  SELECT
	  pref.PREF_GUID AS PREF_GUID , pref.APPL_PROC_IND , pref.MDL_CD as MODEL, pref.MDL_YR as YEAR 			
	  pref.DLR_CD as DEALER, pref.PRTY_NO as PRI , pref.PREF_CMNT as COMMENT, pref.ACCY_SEL_TYP as TYPE
	  pref.CLR_SEL_TYP as OPTION, pref.PREF_ASG_FLG, pref.ERR_FLG , pref.PREF_SRCE_CD
	  pref.ASGT_RNDM_NBR , pref.ASG_SRL_NBR , pref.ASG_RSLT_CD , pref.ALLOC_ID, pref.LST_UPDT_ID as USER
	  CAST(CAST(pref.LST_UPDT_TMDT AS CHAR(19)) as TimeStamp) as TS
	  pref.SET_RSRV_VEH_FLG as RESERVED, mdl.ALLOC_SER_CD as SERIES
	  FROM DPMGVARS.gstrDB2Owner.PREFERENCE pre
	  INNER JOIN DPMGVARS.gstrDB2Owner.MODEL mdl ON pref.MDL_CD = mdl.MDL_CD AND pref.MDL_YR = mdl.MDL_YR 
	  WHERE pref.DLR_CD='Dealer' AND mdl.ALLOC_SER_CD='Series' AND pref.APPL_PROC_IND <> 'DAS' 
	  AND pref.ALLOC_ID=''
	  ORDER BY pref.PRTY_NO, pref.MDL_CD
	
	  SELECT PROG_PT FROM UCOS.UGCURP RIGHT OUTER JOIN (SELECT PROG_PT,
	  FLAG_PF_PT, COGNOME_PT, NOME_PT, TIPO_UFF_PT, COD_UFF_PT, COD_CAT_PT,
	  FLAG_PRO_PT, FLAG_RAP_PT, VESTE_PT, CTR_COST_PT,  COD_FISC_PT, 
	  PATRON_PT,DATA_N_PT, CITTA_N_PT, PROV_N_PT, INDIR_PT, CITTA_PT, PROV_PT, 
	  CAP_PT, CODICE_COM_PT, PROT_PT, RAPP_CM, RICOR_CM FROM UCOS.UGCUPT JOIN
	  (SELECT PROT_CM, RICOR_CM, RAPP_CM, DIF_CM, NUM_ELENCO_CM,  DATA_USCITA_CM,
	  ESITO_CM, PROT_LNK_CM, RICOR_LNK_CM, RAPP_LNK_CM, DIF_LNK_CM, CODICE_COM_CM
	  FROM UCOS.UGCUCM WHERE CODICE_COM_CM = 'PRO' AND PROT_CM = '200000000400' 
	  AND TIPO_COM_CM = '1' AND NUM_ELENCO_CM = 0 AND DATA_ANN_CM = 
	  '0001-01-01-00.00.00.000000') AS TEMP1  ON CODICE_COM_PT = CODICE_COM_CM 
	  AND PROT_PT = PROT_CM AND PROG_PT = RICOR_CM  WHERE DATA_ANN_PT = 
	  '0001-01-01-00.00.00.000000') AS TEMP2 ON CODICE_COM_RP = CODICE_COM_PT AND 
	  PROT_RP = PROT_PT AND PROG_RP = RAPP_CM AND PROG_PT_RP = RICOR_CM
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
